import { AppState } from 'react-native';

import { getDataSource } from '@/data';
import { useAppStore } from '@/stores/app.store';
import type { AppStoreState } from '@/stores/app.store.types';
import { useProgressStore } from '@/stores/progress.store';
import type { ProgressStoreState } from '@/stores/progress.store.types';
import { changedProgressFields, reconcileProgress } from '@/utils/progress-sync';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';

/**
 * Keeps the device's walk and era picks in step with the visitor's copy on
 * the server, so a second device (or the same account after a reinstall)
 * hands the recommender the same history.
 *
 * The persisted stores stay the source the UI reads: everything works
 * offline, and a sync only ever *adds* to what the device holds (merge rules
 * in utils/progress-sync.ts). A sync sends the full local state and gets the
 * merged whole back; that is idempotent, so the stores double as the outbox
 * and a failed or interrupted sync is simply retried.
 *
 * When it runs: once on start, shortly after any synced change (debounced),
 * when the app returns to the foreground (throttled), and with backoff
 * after a failure.
 */

/** Lets a burst of changes (finishing a lesson touches three fields) go as one sync. */
const CHANGE_DEBOUNCE_MS = 2_000;
/** Foreground pulls pick up other devices' walks; no need on every app switch. */
const RESUME_MIN_INTERVAL_MS = 30_000;
const RETRY_BASE_MS = 5_000;
const RETRY_MAX_MS = 5 * 60_000;
/**
 * Back-to-back follow-ups allowed while the device keeps reporting state the
 * server lacks. Normally one is enough (a change landed mid-flight); the cap
 * stops a loop if a corrupt local entry is one the server keeps refusing.
 */
const MAX_FOLLOW_UPS = 3;

let running = false;
/** Bumped on every start/stop; a sync that began under an older one drops its answer. */
let generation = 0;
let inFlight = false;
let rerunRequested = false;
let followUps = 0;
let failures = 0;
let lastSyncedAtMs = 0;
let timer: ReturnType<typeof setTimeout> | null = null;
/** Set while a server answer is written to the stores, so it isn't mistaken for a local change. */
let applyingRemote = false;
let teardown: (() => void)[] = [];

interface PersistApi {
  hasHydrated(): boolean;
  onFinishHydration(listener: () => void): () => void;
}

/** Syncing before AsyncStorage rehydrates would merge into (and then lose to) the defaults. */
function whenHydrated(persist: PersistApi): Promise<void> {
  if (persist.hasHydrated()) return Promise.resolve();
  return new Promise((resolve) => {
    const unsubscribe = persist.onFinishHydration(() => {
      unsubscribe();
      resolve();
    });
  });
}

function readSnapshot(): ProgressSnapshot {
  const progress = useProgressStore.getState();
  const app = useAppStore.getState();
  return {
    activeEraId: progress.activeEraId,
    activeEraSetAtMs: progress.activeEraSetAtMs,
    eraInterests: app.eraInterests,
    eraInterestsSetAtMs: app.eraInterestsSetAtMs,
    eraProgress: progress.eraProgress,
    completedSceneIds: progress.completedSceneIds,
    dayScenes: progress.dayScenes,
    visitDays: progress.visitDays,
  };
}

const APP_FIELDS = new Set<keyof ProgressSnapshot>(['eraInterests', 'eraInterestsSetAtMs']);

/** Writes only the fields that changed, so screens reading the rest don't re-render. */
function applySnapshot(current: ProgressSnapshot, merged: ProgressSnapshot): void {
  const changed = changedProgressFields(current, merged);
  if (changed.length === 0) return;
  const progressPatch: Partial<ProgressStoreState> = {};
  const appPatch: Partial<AppStoreState> = {};
  for (const field of changed) {
    if (APP_FIELDS.has(field)) Object.assign(appPatch, { [field]: merged[field] });
    else Object.assign(progressPatch, { [field]: merged[field] });
  }
  applyingRemote = true;
  try {
    if (Object.keys(progressPatch).length > 0) useProgressStore.setState(progressPatch);
    if (Object.keys(appPatch).length > 0) useAppStore.setState(appPatch);
  } finally {
    applyingRemote = false;
  }
}

function progressChanged(next: ProgressStoreState, prev: ProgressStoreState): boolean {
  return (
    next.activeEraId !== prev.activeEraId ||
    next.activeEraSetAtMs !== prev.activeEraSetAtMs ||
    next.eraProgress !== prev.eraProgress ||
    next.completedSceneIds !== prev.completedSceneIds ||
    next.dayScenes !== prev.dayScenes ||
    next.visitDays !== prev.visitDays
  );
}

function interestsChanged(next: AppStoreState, prev: AppStoreState): boolean {
  return next.eraInterests !== prev.eraInterests || next.eraInterestsSetAtMs !== prev.eraInterestsSetAtMs;
}

function schedule(delayMs: number): void {
  if (!running) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    void runSync();
  }, delayMs);
}

async function runSync(): Promise<void> {
  if (!running) return;
  if (inFlight) {
    rerunRequested = true;
    return;
  }
  inFlight = true;
  const runGeneration = generation;
  try {
    await Promise.all([whenHydrated(useProgressStore.persist), whenHydrated(useAppStore.persist)]);
    if (runGeneration !== generation) return;

    const remote = await getDataSource().syncProgress(readSnapshot());
    if (runGeneration !== generation) return;

    // Merge into what the device holds *now*: a lesson finished while the
    // request was out is kept, and sent by the follow-up below.
    const current = readSnapshot();
    const { merged, localAhead } = reconcileProgress(current, remote);
    applySnapshot(current, merged);
    failures = 0;
    lastSyncedAtMs = Date.now();
    if (localAhead && followUps < MAX_FOLLOW_UPS) {
      followUps += 1;
      rerunRequested = true;
    } else {
      followUps = 0;
    }
  } catch (error) {
    if (runGeneration !== generation) return;
    failures += 1;
    console.warn('[progress-sync] sync failed:', error instanceof Error ? error.message : error);
    schedule(Math.min(RETRY_BASE_MS * 2 ** (failures - 1), RETRY_MAX_MS));
  } finally {
    inFlight = false;
    if (rerunRequested && running) {
      rerunRequested = false;
      schedule(CHANGE_DEBOUNCE_MS);
    }
  }
}

/**
 * Begin syncing for the signed-in visitor. Idempotent. Call once the
 * visitor is past onboarding: that is when the app first creates a session.
 */
export function startProgressSync(): void {
  if (running) return;
  running = true;
  generation += 1;
  followUps = 0;
  failures = 0;

  const unsubscribeProgress = useProgressStore.subscribe((next, prev) => {
    if (!applyingRemote && progressChanged(next, prev)) schedule(CHANGE_DEBOUNCE_MS);
  });
  const unsubscribeApp = useAppStore.subscribe((next, prev) => {
    if (!applyingRemote && interestsChanged(next, prev)) schedule(CHANGE_DEBOUNCE_MS);
  });
  const appState = AppState.addEventListener('change', (status) => {
    if (status === 'active' && Date.now() - lastSyncedAtMs >= RESUME_MIN_INTERVAL_MS) schedule(0);
  });
  teardown = [unsubscribeProgress, unsubscribeApp, () => appState.remove()];

  schedule(0);
}

/**
 * Stop syncing and drop any answer still in flight. Must run before the
 * session goes away (account deletion, reset to a first visit): otherwise a
 * pending sync would mint a fresh anonymous user and upload the old walk
 * to it, or write the old walk back into the freshly reset stores.
 */
export function stopProgressSync(): void {
  running = false;
  generation += 1;
  if (timer) clearTimeout(timer);
  timer = null;
  rerunRequested = false;
  for (const dispose of teardown) dispose();
  teardown = [];
}

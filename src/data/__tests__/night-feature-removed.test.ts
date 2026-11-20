import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { describe, it } from 'node:test';

import { materializeBundledScenes } from '@/data/bundled-scenes';
import { mapSceneRow } from '@/data/scene-row';
import type { SceneRow } from '@/data/supabase-data-source.types';

/**
 * Guard for the removed Night feature (a.k.a. Night Wing, "tonight's
 * telling"): a slower bedtime narration of each day's scene, with its own
 * audio. It was dropped on purpose, but production may still hold its data:
 * three columns on public.scenes until the drop migration runs, and
 * `<slug>-night.mp3` objects in the scenes bucket.
 *
 * The guard targets that feature's own artifacts (its exact column and code
 * names, its three story texts, its audio files), not the word "night". A
 * night mode, night-themed artwork or a new narration feature with new
 * content are all fine; reusing the removed feature's data is not.
 *
 * If a test fails and bringing the feature back is intentional, that is a
 * product decision: make it, then update or delete this guard in the same
 * change.
 */

const REMOVED = 'The Night feature was removed on purpose (see night-feature-removed.test.ts).';

const REPO_ROOT = resolve(__dirname, '..', '..', '..');
const THIS_FILE = relative(REPO_ROOT, __filename).split(sep).join('/');
const MIGRATIONS_DIR = join(REPO_ROOT, 'supabase', 'migrations');

/** The columns the feature added to public.scenes, and that 20261120000100 drops. */
const REMOVED_COLUMNS = ['night_story', 'night_audio_url', 'night_audio_duration_seconds'] as const;

/** Opening lines of the three removed stories: catches the texts under any new name. */
const REMOVED_STORY_FINGERPRINTS = [
  'The morning is ordinary, which is the part worth remembering',
  'The island keeps two clocks',
  'The fleet spends the last night in sight of the enemy',
];

/**
 * A name that is not embedded in a longer word. Underscores count as
 * separators, so `submit_night_story` still contains `night_story`, while
 * `night_mode` or `midnight` contain none of the removed names.
 */
function exactName(names: string, flags = ''): RegExp {
  return new RegExp(`(?<![A-Za-z0-9])(?:${names})(?![A-Za-z0-9])`, flags);
}

/** The removed feature's own names, each with what it stood for. */
const FORBIDDEN_SOURCE_PATTERNS: readonly { pattern: RegExp; what: string }[] = [
  { pattern: exactName(REMOVED_COLUMNS.join('|'), 'i'), what: 'a removed public.scenes column' },
  { pattern: exactName('NIGHT_STORIES'), what: 'the removed bundled stories (NIGHT_STORIES)' },
  { pattern: exactName('night-stories'), what: 'the removed src/content/night-stories.ts' },
  { pattern: exactName('nightStory'), what: 'the removed night story field (nightStory)' },
  { pattern: exactName('SceneNight'), what: 'the removed SceneNight domain type' },
  {
    pattern: exactName('ELEVENLABS_NIGHT_VOICE_ID|elevenLabsNightVoiceId'),
    what: 'the removed night narration voice',
  },
  { pattern: /\bnight[ _-]?wing\b/i, what: 'the removed Night Wing feature' },
  { pattern: /\btonight['’]s telling|\bnight tellings?\b/i, what: 'the removed "tonight\'s telling" copy' },
  { pattern: /-night\.mp3\b/i, what: 'the removed <slug>-night.mp3 narration files' },
];

/** Every removed-feature pattern or story text found in a piece of text. */
function findRemovedFeature(text: string): string[] {
  const found: string[] = [];
  for (const { pattern, what } of FORBIDDEN_SOURCE_PATTERNS) {
    const match = pattern.exec(text);
    if (match) {
      const line = text.slice(0, match.index).split('\n').length;
      found.push(`line ${line}: ${what} (matched "${match[0].trim()}")`);
    }
  }
  for (const fingerprint of REMOVED_STORY_FINGERPRINTS) {
    if (text.includes(fingerprint)) found.push(`removed night story text "${fingerprint}…"`);
  }
  return found;
}

interface Migration {
  file: string;
  sql: string;
}

/**
 * Replays migrations in order, tracking only the removed columns. They may
 * appear in ADD and DROP COLUMN statements and nowhere else: a RENAME would
 * keep their data alive under a new name, and any other use (a copy into a
 * new column, a policy, a function, a view) would read it.
 */
function replayRemovedColumns(migrations: readonly Migration[]): { live: string[]; offences: string[] } {
  const removed = REMOVED_COLUMNS.join('|');
  const columnChange = new RegExp(
    `\\b(add|drop)\\s+(?:column\\s+)?(?:if\\s+(?:not\\s+)?exists\\s+)?"?(${removed})"?(?![A-Za-z0-9_])`,
    'gi',
  );
  const rename = /\brename\s+(?:column\s+)?"?(\w+)"?\s+to\s+"?(\w+)"?/gi;
  const anyUse = exactName(removed, 'gi');

  const live = new Map<string, string>();
  const offences: string[] = [];

  for (const { file, sql } of [...migrations].sort((a, b) => a.file.localeCompare(b.file))) {
    const withoutComments = sql.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/--[^\n]*/g, ' ');
    for (const statement of withoutComments.split(';')) {
      let rest = statement;

      for (const [clause, from, to] of statement.matchAll(rename)) {
        const fromRemoved = (REMOVED_COLUMNS as readonly string[]).includes(from.toLowerCase());
        const toRemoved = (REMOVED_COLUMNS as readonly string[]).includes(to.toLowerCase());
        if (!fromRemoved && !toRemoved) continue;
        if (fromRemoved) {
          live.delete(from.toLowerCase());
          offences.push(`${file}: renames ${from} to ${to}, so the removed data would live on`);
        }
        if (toRemoved) live.set(to.toLowerCase(), file);
        rest = rest.replace(clause, ' ');
      }

      for (const [clause, action, column] of statement.matchAll(columnChange)) {
        if (action.toLowerCase() === 'add') live.set(column.toLowerCase(), file);
        else live.delete(column.toLowerCase());
        rest = rest.replace(clause, ' ');
      }

      for (const [name] of rest.matchAll(anyUse)) {
        offences.push(`${file}: uses ${name} outside ADD/DROP COLUMN`);
      }
    }
  }

  return { live: [...live].map(([column, file]) => `${column} (added in ${file})`), offences };
}

function repoMigrations(): Migration[] {
  return readdirSync(MIGRATIONS_DIR)
    .filter((file) => file.endsWith('.sql'))
    .map((file) => ({ file, sql: readFileSync(join(MIGRATIONS_DIR, file), 'utf8') }));
}

const SKIPPED_DIRS = new Set([
  'node_modules', '.git', '.next', '.expo', '.vercel', '.supabase', '.temp', 'dist', 'build', 'out',
  'coverage', 'web-build', 'ios', 'android', 'editorial-work', '.r2-staging', '.playwright-mcp',
]);
const SCANNED_EXTENSIONS = /\.(ts|tsx|js|jsx|mjs|cjs|json|sql|md|toml|ya?ml)$/;

/**
 * Checked-in text files the feature could come back through. Local, gitignored
 * files (.env with an old night voice id, editorial-work/ drafts) are left out
 * on purpose: they are not shipped and would fail only one person's machine.
 */
function scannedFiles(): string[] {
  const files: string[] = [];
  const walk = (dir: string): void => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!SKIPPED_DIRS.has(entry.name)) walk(full);
      } else if (
        (SCANNED_EXTENSIONS.test(entry.name) || entry.name === '.env.example') &&
        entry.name !== 'package-lock.json'
      ) {
        files.push(relative(REPO_ROOT, full).split(sep).join('/'));
      }
    }
  };
  for (const dir of ['src', 'web', 'scripts', 'supabase']) walk(join(REPO_ROOT, dir));
  for (const file of ['.env.example', 'README.md', 'package.json', 'app.json', 'app.config.js', 'eas.json']) {
    if (existsSync(join(REPO_ROOT, file))) files.push(file);
  }
  // Migrations are history: the night_wing migration and its drop name the
  // columns by necessity. replayRemovedColumns governs them instead.
  return files.filter((file) => !file.startsWith('supabase/migrations/') && file !== THIS_FILE);
}

/** A production-shaped scenes row: what `select('*')` returns before the drop migration runs. */
function productionRowWithRemovedColumns(): SceneRow & Record<(typeof REMOVED_COLUMNS)[number], unknown> {
  return {
    id: '6f1c2f0e-1b1a-4c55-9a53-1f0f6d1a2b3c',
    slug: 'the-last-day-of-pompeii',
    title: 'The Last Day of Pompeii',
    dek: 'Vesuvius turns noon to midnight over the Bay of Naples',
    story: 'Day story.',
    era_id: 'roman-empire',
    historical_date_label: '24 August, AD 79',
    historical_year: 79,
    scheduled_for: '2026-08-24',
    image_url: 'https://example.com/pompeii.jpg',
    thumb_url: 'https://example.com/pompeii-thumb.jpg',
    art_title: null,
    art_credit: 'Karl Bryullov',
    blurhash: null,
    on_this_day: true,
    historical_month_day: '08-24',
    commissioned_by: null,
    status: 'published',
    night_story: `${REMOVED_STORY_FINGERPRINTS[0]}. Night story.`,
    night_audio_url: 'https://example.supabase.co/storage/v1/object/public/scenes/the-last-day-of-pompeii-night.mp3',
    // Distinctive, so it can be found by value under any key.
    night_audio_duration_seconds: 987_654_321,
  };
}

describe('night feature stays removed', () => {
  it('the guard is looking at the real repository', () => {
    const pkg = JSON.parse(readFileSync(join(REPO_ROOT, 'package.json'), 'utf8')) as { name?: string };
    assert.equal(pkg.name, 'prompted-past', `REPO_ROOT resolved to ${REPO_ROOT}`);
    assert.ok(existsSync(MIGRATIONS_DIR), 'supabase/migrations must exist');
    assert.ok(scannedFiles().length > 50, 'the source scan must actually find files');
  });

  it('the source patterns catch the removed feature and nothing else', () => {
    const removedFeature = [
      "select night_story from public.scenes",
      "update({ night_audio_url: url, night_audio_duration_seconds: 1 })",
      "name: 'submit_night_story'",
      "import { NIGHT_STORIES } from '@/content/night-stories';",
      'saveDraft({ ...draft, nightStory });',
      'night?: SceneNight;',
      'ELEVENLABS_NIGHT_VOICE_ID=abc',
      'env.elevenLabsNightVoiceId',
      '-- Night Wing: each daily scene may carry',
      "Tonight's telling published",
      '-- Night tellings for the demo scenes.',
      'upload(`${slug}-night.mp3`, bytes)',
      `const calm = { 'nelsons-ocean': '${REMOVED_STORY_FINGERPRINTS[2]}.' };`,
    ];
    const otherFeatures = [
      // A night mode.
      "export type ThemeMode = 'day' | 'night';",
      'export const palettes = {\n  night: { background: "#000" },\n};',
      'const bg = palettes.night.background;',
      'export const isNightMode = false; export const nightPalette = {};',
      'alter table public.profiles add column night_mode boolean;',
      'nightThumbUrl: def.thumbUrl,',
      'Night mode follows the system setting.',
      // A new narration feature with its own content.
      "export const CALM_VOICEOVERS = { 'nelsons-ocean': 'Freshly written.' };",
      'alter table public.scenes add column calm_voiceover_text text;',
      'ELEVENLABS_CALM_VOICE_ID=abc',
      "case 'calm':",
      // Ordinary words and content.
      'Vesuvius turns noon to midnight. A knight keeps vigil; tonight, overnight, a fortnight.',
      "id: 'starry-night', imageUrl: bucketPainting('house/starry-night.jpg'),",
      "slug: 'the-night-shift'",
      'A night story told slowly.',
    ];

    assert.deepEqual(
      removedFeature.filter((text) => findRemovedFeature(text).length === 0),
      [],
      'each of these reuses the removed feature and must be caught',
    );
    assert.deepEqual(
      otherFeatures.map((text) => [text, findRemovedFeature(text)]).filter(([, found]) => found.length > 0),
      [],
      'none of these is the removed feature and must pass',
    );
  });

  it('the migration replay catches the removed columns and nothing else', () => {
    // A fixed history mirroring the real one, so this tests the detector alone
    // and a problem in the real migrations is reported once, by the next test.
    const history: Migration[] = [
      { file: '20260704000100_initial_schema.sql', sql: 'create table public.scenes (id uuid primary key, story text);' },
      {
        file: '20260710000100_night_wing.sql',
        sql: '-- Night Wing\nalter table public.scenes add column night_story text;\n'
          + 'alter table public.scenes add column night_audio_url text;\n'
          + 'alter table public.scenes add column night_audio_duration_seconds int;',
      },
      {
        file: '20261120000100_drop_night_wing.sql',
        sql: 'alter table public.scenes drop column if exists night_story;\n'
          + 'alter table public.scenes drop column if exists night_audio_url;\n'
          + 'alter table public.scenes drop column if exists night_audio_duration_seconds;',
      },
    ];
    const withExtra = (sql: string, file = '20990101000100_extra.sql') => replayRemovedColumns([...history, { file, sql }]);
    assert.deepEqual(replayRemovedColumns(history), { live: [], offences: [] });

    const allowed = [
      'alter table public.profiles add column night_mode boolean not null default false;',
      'alter table public.scenes add column calm_voiceover_text text, add column calm_voiceover_audio_url text;',
      "create function public.reset_at_midnight() returns void language sql as $$ select 1 $$;",
      "update public.scenes set dek = 'Christmas night on the Delaware' where slug = 'x';",
      '-- this comment mentions night_story and is not schema',
      'alter table public.scenes drop column if exists night_story;',
    ];
    for (const sql of allowed) {
      assert.deepEqual(withExtra(sql), { live: [], offences: [] }, sql);
    }

    const reAdd = withExtra('alter table public.scenes add column if not exists night_story text;');
    assert.deepEqual(reAdd.live, ['night_story (added in 20990101000100_extra.sql)']);

    const reAddWithoutColumnKeyword = withExtra('ALTER TABLE public.scenes ADD night_audio_url text;');
    assert.deepEqual(reAddWithoutColumnKeyword.live, ['night_audio_url (added in 20990101000100_extra.sql)']);

    const renamedBeforeDrop = withExtra(
      'alter table public.scenes rename column night_story to calm_voiceover_text;',
      '20261101000100_calm.sql',
    );
    assert.deepEqual(renamedBeforeDrop.live, []);
    assert.deepEqual(renamedBeforeDrop.offences, [
      '20261101000100_calm.sql: renames night_story to calm_voiceover_text, so the removed data would live on',
    ]);

    const renamedBack = withExtra('alter table public.scenes rename column calm_text to night_story;');
    assert.deepEqual(renamedBack.live, ['night_story (added in 20990101000100_extra.sql)']);

    const copied = withExtra(
      'alter table public.scenes add column calm_voiceover_text text;\nupdate public.scenes set calm_voiceover_text = night_story;',
      '20261101000100_calm.sql',
    );
    assert.deepEqual(copied.offences, ['20261101000100_calm.sql: uses night_story outside ADD/DROP COLUMN']);

    const readByFunction = withExtra(
      'create function public.calm_audio(s uuid) returns text language sql as $$ select night_audio_url from public.scenes where id = s $$;',
    );
    assert.deepEqual(readByFunction.offences, ['20990101000100_extra.sql: uses night_audio_url outside ADD/DROP COLUMN']);

    const withoutDrop = history.filter(({ file }) => !file.endsWith('_drop_night_wing.sql'));
    assert.deepEqual(replayRemovedColumns(withoutDrop).live, [
      'night_story (added in 20260710000100_night_wing.sql)',
      'night_audio_url (added in 20260710000100_night_wing.sql)',
      'night_audio_duration_seconds (added in 20260710000100_night_wing.sql)',
    ]);
  });

  it('replaying the migrations leaves the database without the removed columns', () => {
    assert.deepEqual(
      replayRemovedColumns(repoMigrations()),
      { live: [], offences: [] },
      `live: removed columns still in the schema after all migrations; offences: migrations that keep or read them. ${REMOVED}`,
    );
  });

  it('bundled scenes carry none of the removed stories', () => {
    const scenes = materializeBundledScenes();
    for (const slug of ['the-last-day-of-pompeii', 'the-sea-wolves-of-lindisfarne', 'nelsons-ocean']) {
      assert.ok(
        scenes.some((scene) => scene.slug === slug),
        `${slug} (one of the scenes that used to carry a night story) is still bundled`,
      );
    }

    const serialized = JSON.stringify(scenes);
    for (const fingerprint of REMOVED_STORY_FINGERPRINTS) {
      assert.ok(!serialized.includes(fingerprint), `a removed night story is bundled again: "${fingerprint}…". ${REMOVED}`);
    }
  });

  it('a production scenes row still carrying the removed columns maps to a Scene without their data', () => {
    const row = productionRowWithRemovedColumns();
    const scene = mapSceneRow(row);

    // The mapping still works for everything else.
    assert.equal(scene.slug, row.slug);
    assert.equal(scene.story, row.story);
    assert.equal(scene.artCredit, row.art_credit);

    // By value, so the data is caught under any key it might be renamed to.
    const serialized = JSON.stringify(scene);
    for (const column of REMOVED_COLUMNS) {
      assert.ok(
        !serialized.includes(String(row[column])),
        `mapSceneRow surfaces the removed ${column} data. ${REMOVED}`,
      );
    }
  });

  it('no source, seed, script, doc or config brings the feature back', () => {
    const offences = scannedFiles().flatMap((file) =>
      findRemovedFeature(readFileSync(join(REPO_ROOT, file), 'utf8')).map((found) => `${file} ${found}`),
    );
    assert.deepEqual(offences, [], `the removed Night feature is coming back. ${REMOVED}`);
  });
});

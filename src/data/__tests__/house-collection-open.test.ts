import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { sameStill } from '@/content/scenes/painting-source';
import { HOUSE_COLLECTION, currentHouseStill, houseWorkFor } from '@/content/studio-suggestions';
import {
  decideStudioSubmitRoute,
  isHouseCollectionOpen,
  resolveHouseCollectionClip,
} from '@/data/house-collection-open';
import type { StudioSubmission } from '@/types/domain.types';

/**
 * Mirrors live `SupabaseDataSource.submitStudioPiece` branching so a regression
 * that re-routes house opens through File().base64 / studio-animate fails here
 * without needing Expo or a Supabase session.
 */
async function submitStudioPieceBranch(
  input: Pick<StudioSubmission, 'origin' | 'imageUri'>,
  adapters: {
    openPreStaged: (clip: { suggestionId: string; videoFile: string; imageUri: string }) => Promise<'pre-staged'>;
    invokeStudioAnimate: (imageUri: string) => Promise<'studio-animate'>;
  },
): Promise<'pre-staged' | 'studio-animate'> {
  const route = decideStudioSubmitRoute(input);
  if (route.action === 'serve-pre-staged') {
    return adapters.openPreStaged({
      suggestionId: route.suggestionId,
      videoFile: route.videoFile,
      imageUri: input.imageUri,
    });
  }
  return adapters.invokeStudioAnimate(input.imageUri);
}

describe('house-collection-open', () => {
  const house = HOUSE_COLLECTION[0];
  assert.ok(house, 'HOUSE_COLLECTION must include at least one woken work');
  assert.match(house.imageUrl, /^https:\/\//, 'house stills are remote HTTPS URLs');
  assert.ok(house.videoFile, 'house stills on the wall have a pre-staged clip');

  it('resolveHouseCollectionClip maps a remote house still to its pre-staged clip', () => {
    const clip = resolveHouseCollectionClip(house.imageUrl);
    assert.deepEqual(clip, { suggestionId: house.id, videoFile: house.videoFile });
  });

  it('a revisioned still and the unversioned URL a stored piece kept resolve to the same work', () => {
    const revisioned = HOUSE_COLLECTION.find((def) => def.videoFile && /\?v=\d+$/.test(def.imageUrl));
    assert.ok(revisioned, 'at least one house still carries a ?v= revision');
    const stored = revisioned.imageUrl.replace(/\?v=\d+$/, '');
    assert.ok(sameStill(stored, revisioned.imageUrl));
    assert.equal(houseWorkFor(stored)?.id, revisioned.id);
    assert.equal(currentHouseStill(stored), revisioned.imageUrl);
    assert.deepEqual(resolveHouseCollectionClip(stored), {
      suggestionId: revisioned.id,
      videoFile: revisioned.videoFile,
    });
    assert.deepEqual(resolveHouseCollectionClip(`${stored}?v=1`), resolveHouseCollectionClip(revisioned.imageUrl));
  });

  it('isHouseCollectionOpen is true only for collection origin', () => {
    assert.equal(isHouseCollectionOpen('collection'), true);
    assert.equal(isHouseCollectionOpen('upload'), false);
  });

  it('collection submit with a remote house still never invokes studio-animate', async () => {
    let animateCalls = 0;
    let base64StyleReads = 0;
    let staged: { suggestionId: string; videoFile: string; imageUri: string } | null = null;

    const result = await submitStudioPieceBranch(
      { origin: 'collection', imageUri: house.imageUrl },
      {
        openPreStaged: async (clip) => {
          staged = clip;
          return 'pre-staged';
        },
        invokeStudioAnimate: async (imageUri) => {
          // Live path would do: await new File(imageUri).base64() then invoke.
          base64StyleReads += 1;
          animateCalls += 1;
          void imageUri;
          return 'studio-animate';
        },
      },
    );

    assert.equal(result, 'pre-staged');
    assert.equal(animateCalls, 0);
    assert.equal(base64StyleReads, 0);
    assert.deepEqual(staged, {
      suggestionId: house.id,
      videoFile: house.videoFile,
      imageUri: house.imageUrl,
    });
  });

  it('every woken house painting routes to pre-staged clips, never studio-animate', async () => {
    for (const work of HOUSE_COLLECTION) {
      assert.match(work.imageUrl, /^https:\/\//);
      let animateCalls = 0;
      const result = await submitStudioPieceBranch(
        { origin: 'collection', imageUri: work.imageUrl },
        {
          openPreStaged: async () => 'pre-staged',
          invokeStudioAnimate: async () => {
            animateCalls += 1;
            return 'studio-animate';
          },
        },
      );
      assert.equal(result, 'pre-staged', work.id);
      assert.equal(animateCalls, 0, work.id);
      assert.equal(
        decideStudioSubmitRoute({ origin: 'collection', imageUri: work.imageUrl }).action,
        'serve-pre-staged',
        work.id,
      );
    }
  });

  it('real upload submits still hit studio-animate (local file URI)', async () => {
    let animateCalls = 0;
    const localUri = 'file:///var/mobile/Containers/Data/Application/tmp/commission.jpg';

    const result = await submitStudioPieceBranch(
      { origin: 'upload', imageUri: localUri },
      {
        openPreStaged: async () => {
          throw new Error('upload must not take the pre-staged path');
        },
        invokeStudioAnimate: async (imageUri) => {
          assert.equal(imageUri, localUri);
          animateCalls += 1;
          return 'studio-animate';
        },
      },
    );

    assert.equal(result, 'studio-animate');
    assert.equal(animateCalls, 1);
    assert.equal(
      decideStudioSubmitRoute({ origin: 'upload', imageUri: localUri }).action,
      'invoke-studio-animate',
    );
  });

  it('refuses to File().base64 a house HTTPS still even if origin is mis-tagged upload', () => {
    assert.throws(
      () => decideStudioSubmitRoute({ origin: 'upload', imageUri: house.imageUrl }),
      /pre-staged clips/,
    );
  });

  it('collection submit without a staged clip fails closed (no animate)', () => {
    assert.throws(
      () =>
        decideStudioSubmitRoute({
          origin: 'collection',
          imageUri: 'https://example.com/not-a-house-painting.jpg',
        }),
      /not ready to wake/,
    );
  });
});

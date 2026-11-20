import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { canGrantMockMembership, resolveOfferingPackage } from '@/lib/purchases-policy';

describe('purchases-policy', () => {
  it('never grants mock membership in live mode', () => {
    assert.equal(canGrantMockMembership('live'), false);
    assert.equal(canGrantMockMembership('mock'), true);
  });

  it('returns null when the selected plan package is missing (no fallback)', () => {
    const monthly = { id: 'm' };
    const annual = { id: 'a' };
    assert.equal(resolveOfferingPackage('monthly', monthly, annual), monthly);
    assert.equal(resolveOfferingPackage('annual', monthly, annual), annual);
    assert.equal(resolveOfferingPackage('monthly', null, annual), null);
    assert.equal(resolveOfferingPackage('annual', monthly, undefined), null);
    assert.equal(resolveOfferingPackage('monthly', undefined, undefined), null);
  });
});

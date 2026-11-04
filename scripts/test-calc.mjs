// Self-check for the Health Check maths: `npm test`.
import assert from 'node:assert/strict';
import { check } from '../theme/calc.js';

const base = { players: 100, playersPrev: 100, supply: 1_000_000, supplyPrev: 1_000_000, faucets: 100_000, sinks: 95_000, top10: 40 };

const ok = check(base);
assert.equal(ok.mood, 'party');
assert.ok(ok.items.every((i) => i.level === 'good'), 'a balanced server is all good');

const inflating = check({ ...base, sinks: 30_000, supply: 1_300_000 });
assert.equal(inflating.mood, 'worried');
assert.equal(inflating.items[0].level, 'act');
assert.equal(inflating.items[1].level, 'act');

assert.ok(check({ ...base, players: 0 }).error, 'zero players is rejected');
assert.ok(check({ ...base, faucets: 0 }).error, 'zero faucets is rejected');
assert.ok(check({ ...base, supply: -5 }).error, 'negative money is rejected');
assert.ok(check({ ...base, top10: 140 }).error, 'percent over 100 is rejected');
assert.equal(check({ ...base, top10: NaN }).items.length, 3, 'top10 is optional');
assert.equal(check({ ...base, top10: 80 }).items[3].level, 'act');

console.log('calc tests passed');

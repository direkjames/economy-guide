// The Health Check maths. Pure functions, so they can be tested without a browser.

const pct = (n) => `${Math.round(n * 10) / 10}%`;
const num = (n) => Math.round(n).toLocaleString('en-US');

/**
 * v: { players, playersPrev, supply, supplyPrev, faucets, sinks, top10? }  (all numbers >= 0)
 * Returns { error } or { mood, title, text, items: [{ level, label, text, link }] }.
 * level: good | watch | act
 */
export function check(v) {
  for (const k of ['players', 'playersPrev', 'supply', 'supplyPrev', 'faucets', 'sinks']) {
    if (!Number.isFinite(v[k]) || v[k] < 0) return { error: 'Fill in every field with a number of 0 or more. Only the last one is optional.' };
  }
  if (v.players === 0 || v.playersPrev === 0) return { error: 'Active players must be more than 0, this week and last week.' };
  if (v.supplyPrev === 0) return { error: 'Money one week ago must be more than 0, or the weekly change cannot be worked out.' };
  if (v.faucets === 0) return { error: 'Money created per day must be more than 0. If nothing is created, check how you counted.' };
  const hasTop = Number.isFinite(v.top10);
  if (hasTop && (v.top10 < 0 || v.top10 > 100)) return { error: 'The richest-10% share is a percentage from 0 to 100.' };

  const items = [];

  // 1. Sinks against faucets
  const ratio = (v.sinks / v.faucets) * 100;
  let lvl = 'good';
  let text = 'Money leaves about as fast as it is made. This is the single most important number, and yours is healthy.';
  if (ratio < 60) {
    lvl = 'act';
    text = 'Far more money is made than removed, so prices will keep climbing. Add sinks or trim faucets.';
  } else if (ratio < 80) {
    lvl = 'watch';
    text = 'Slightly more money is made than removed. Fine for a young, growing server, but do not let it sit here for months.';
  } else if (ratio > 150) {
    lvl = 'act';
    text = 'Far more money is removed than made. Players will feel broke. Ease the sinks or add rewards.';
  } else if (ratio > 120) {
    lvl = 'watch';
    text = 'More money is removed than made. Good for a short cleanup, but long term players will run dry.';
  }
  items.push({ level: lvl, label: `Sinks vs faucets: ${pct(ratio)}`, text, link: ['inflation/spotting/', 'Read: spotting inflation'] });

  // 2. Money per player, week over week
  const now = v.supply / v.players;
  const before = v.supplyPrev / v.playersPrev;
  const g = (now / before - 1) * 100;
  lvl = 'good';
  text = 'Money per active player is steady. That is exactly what a calm economy looks like.';
  if (g > 15) {
    lvl = 'act';
    text = 'Each player holds much more money than last week. Check what changed: a new faucet, an event or an exploit.';
  } else if (g > 5) {
    lvl = 'watch';
    text = 'Money per player is rising. Normal for a young server, a warning sign for an old one.';
  } else if (g < -15) {
    lvl = 'act';
    text = 'Money per player fell sharply. A big sink, a reset or a fix may be the reason. Make sure players are not stuck.';
  } else if (g < -5) {
    lvl = 'watch';
    text = 'Money per player is falling. Fine after a cleanup. Keep an eye on it.';
  }
  items.push({ level: lvl, label: `Money per player this week: ${g >= 0 ? '+' : ''}${pct(g)}`, text, link: ['inflation/tracking/', 'Read: tracking the economy'] });

  // 3. How many days of income the average player holds
  const perDay = v.faucets / v.players;
  const days = now / perDay;
  lvl = 'good';
  text = 'The average player holds a sensible cushion: enough to plan a purchase, not enough to stop caring about money.';
  if (days > 90) {
    lvl = 'act';
    text = 'Players hold months of income. Money piles up unused, so it is worth less and less. Add worthwhile things to buy.';
  } else if (days > 60) {
    lvl = 'watch';
    text = 'Balances are getting big compared with what players earn. Check for hoarding and missing goals.';
  } else if (days < 7) {
    lvl = 'watch';
    text = 'Players spend money almost as fast as they earn it. Fine if that is by design. Check that prices are not too steep.';
  }
  items.push({ level: lvl, label: `Average balance: ${num(now)} (${Math.round(days * 10) / 10} days of income)`, text, link: ['design/pricing/', 'Read: pricing items'] });

  // 4. Wealth gap (optional)
  if (hasTop) {
    lvl = 'good';
    text = 'Wealth is spread out well enough that new players can still catch up.';
    if (v.top10 > 70) {
      lvl = 'act';
      text = 'A small group holds nearly everything. Add catch-up help for new players and sinks that scale with wealth.';
    } else if (v.top10 > 50) {
      lvl = 'watch';
      text = 'The top group is pulling ahead. Add wealth-based sinks and help for newer players.';
    }
    items.push({ level: lvl, label: `Richest 10% hold ${pct(v.top10)}`, text, link: ['fair/fairness/', 'Read: fairness'] });
  }

  const worst = items.some((i) => i.level === 'act') ? 'act' : items.some((i) => i.level === 'watch') ? 'watch' : 'good';
  const verdicts = {
    good: ['party', 'Your economy looks healthy.', 'Everything checked is inside the comfortable range. Keep tracking it every week.'],
    watch: ['happy', 'Mostly fine, with a few things to watch.', 'Nothing is on fire. Read the yellow items below and keep an eye on them next week.'],
    act: ['worried', 'Something needs attention.', 'At least one number is outside the safe range. Start with the red item below.'],
  };
  const [mood, title, summary] = verdicts[worst];
  return { mood, title, text: summary, items };
}

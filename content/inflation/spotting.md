---
title: Spotting inflation
desc: The early warning signs, the numbers that prove it and the usual causes.
---

Inflation sneaks up. It starts with a few high prices in the auction house and ends with players who cannot afford a stack of food. The earlier you see it, the cheaper the fix.

## Signs players will tell you

- "Everything is so expensive now."
- The same item costs more in the auction house each week.
- New players say they cannot catch up.
- Rich players say there is nothing to buy.
- Shop prices feel silly: nobody bothers to sell to the admin shop.

## Signs you can measure

| Signal | What to look for | Healthy | Worrying |
| --- | --- | --- | --- |
| Money per active player | Week over week | Within about 5% | Up more than 10% to 15% |
| Sinks vs faucets | Sinks divided by faucets | 80% to 100% | Under 60% |
| Price index | Median price of a basket of common items | Flat or slightly rising | Rising steadily |
| Top 10% wealth share | Share of all money held by the top 10% | Under 50% | Over 70% |
| Average balance in days of income | Balance divided by daily income | 7 to 60 days | Over 90 days |
| New player progress | Hours to first rank | Steady | Growing |

Use the [health check](toolkit/health-check.md) to calculate most of these in a minute.

## The price index

Choose 8 to 12 items that players buy or sell often: for example iron ingot, wheat, logs, diamonds, food and an enchanted item. Each week, record the **median** auction price of each (the middle price, which ignores crazy outliers). Add them up. Compare to last week.

If the index rises 3% a week for a month, inflation is quietly at work.

## The usual causes

### 1. A faucet got too strong
A new job, event or reward pays more than expected. Check recent changes first.

### 2. Automation arrived
Players built farms that sell all day. Check sales per hour and see if a few players are far above the rest.

### 3. An exploit
A bug lets someone make money out of nothing. Look for a few accounts with sudden huge balances. See [Stopping exploits](fair/exploits.md).

### 4. Not enough sinks
The server grew, but your sinks did not scale. Players have more than they can spend.

### 5. Hoarding
Money piles up because nothing worth buying exists at the top end.

### 6. Interest and passive income
Bank interest, rent income and any other "money while away" system grows with wealth.

### 7. Too many players got rich at once
A big event or giveaway pushed a lot of money in at the same time.

## A quick diagnosis

1. Compare **faucets and sinks** by type for the last two weeks. Which grew?
2. Look at the **top 10 earners**. Is one method behind most of the income?
3. Check **recent changes**: plugin updates, new events, new shop items, changed prices.
4. Check **suspicious accounts**: brand new, very high income, AFK.
5. Check the **price index**. Which items rose first?

> [!WORRIED] Nugget is worried
> If you see money per player jumping more than 15% in one week, treat it as an incident. Pause what changed, look for an exploit and check the logs before anything else.

Next: [Fixing inflation](inflation/fixing.md).

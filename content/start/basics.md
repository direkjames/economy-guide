---
title: How a server economy works
desc: The five ideas behind every Minecraft economy, explained without jargon.
---

A server economy is a set of rules about how players earn coins, what coins can buy and how coins leave the game again. If you get those three things right, players feel rewarded and prices stay sane. If you get them wrong, the server drifts into one of two bad places: **inflation**, where coins are everywhere and worth nothing, or **deadlock**, where nobody can afford anything.

{{figure:tank}}

## The five ideas

### 1. Money is created and destroyed by the server

In real life, banks and governments control the money supply. In Minecraft, **you** do, through your plugins and settings. Whenever a plugin pays a player for mining, selling or voting, it creates coins out of nothing. Whenever a player pays for a plot, a repair or a tax, those coins vanish for good.

Money moving **between players** does not create or destroy anything. If Alex pays Sam 500 coins, the total stays the same. Only the server can change the total.

### 2. Faucets pour money in

A **faucet** is anything that creates new coins: jobs, selling items to a shop, quests, daily rewards, crates, vote rewards, bank interest and events. See [the faucet catalogue](faucets/catalogue.md).

### 3. Sinks drain money out

A **sink** is anything that permanently removes coins: taxes, fees, rent, repair costs, rank-up prices, cosmetics and shop prices. See [the sink catalogue](sinks/catalogue.md).

### 4. Balance is the whole game

If faucets are bigger than sinks, the total money keeps growing while the amount of stuff in the world stays the same. Every coin buys less. That is inflation. If sinks are bigger than faucets for long, players run out of money and quit.

> [!RULE] The golden rule
> Over a week, the money you destroy should be close to the money you create. About 80% to 100% is a healthy target for a settled server.

### 5. Players feel time, not numbers

A player does not care whether a diamond sword costs 500 or 5,000 coins. They care whether it takes **20 minutes** or **20 hours** to earn. Price everything in hours of effort, then pick the numbers that match. More on that in [Pricing items](design/pricing.md).

## Why economies break

| Problem | What players see | Usual cause |
| --- | --- | --- |
| Inflation | Prices keep rising, old players are millionaires, new players are priced out | Faucets with no sinks, or an exploit |
| Deflation | Nobody has money, shops are empty, players quit | Sinks too big, rewards too small |
| Hoarding | Rich players sit on huge piles of coins with nothing to buy | No good things to spend money on |
| Monopoly | One player controls a key item or the market | No limits on buying or selling in bulk |
| Exploit loops | Someone becomes rich in a day | A recipe or shop price that lets you turn 100 coins into 120 |

> [!NUGGET] Nugget says
> Do not try to build the perfect economy on day one. Build a simple one, measure it every week and fix what drifts. The [weekly checklist](toolkit/checklist.md) is made for exactly that.

## Words you will see a lot

- **Money supply:** all the coins that exist right now, added up.
- **Faucet:** a way coins are created.
- **Sink:** a way coins are destroyed.
- **Inflation:** the same item costs more and more coins over time.
- **Velocity:** how fast coins change hands. High velocity means a busy market.

The [glossary](toolkit/glossary.md) has the full list.

## Where to go next

1. Read the [golden rules](start/golden-rules.md) for a one-page summary.
2. Follow the [launch plan](start/launch-plan.md) if you are setting up a new economy.
3. Already running? Open the [health check](toolkit/health-check.md) and see how your server is doing today.

---
title: Pricing items
desc: How to give every item a fair price, why buying and selling must differ, and how to stop bulk selling from ruining it.
---

## Start with time

The best pricing method is simple: **price = hours to obtain x what an hour is worth**.

1. Pick an hourly rate for the stage of the game (for example 1,500 coins per hour early on).
2. Time how long it really takes to get one stack of the item the normal way.
3. Multiply. That is your base value.

> [!EXAMPLE] A worked price
> An early hour is worth 1,500 coins. A good player mines 2 stacks of coal in 20 minutes (one third of an hour). 2 stacks is 128 coal, so the value is 500 coins for 128 coal, or about 3.9 coins per coal. Round to 4.

Do this for a handful of **anchor items** (coal, iron, wheat, logs, a few drops). Price everything else by comparing it to those.

## Rarity and convenience

Some items are worth more than the time they take. Add a multiplier:

| Reason | Multiplier on the time-based value |
| --- | --- |
| Common and easy to get in bulk | x1 |
| Useful for a major upgrade | x1.5 to x2 |
| Rare drop or hard to reach | x2 to x4 |
| Unique, limited or prestige | Whatever the market will bear, with a ceiling |

## Buy and sell must differ

An admin shop that buys and sells the same item at the same price creates no value for the server and invites exploits. Use a **spread**:

| Buy price (player pays) | Sell price (player gets) | Sell as % of buy |
| --- | --- | --- |
| 100 | 25 to 40 | 25% to 40% |

The gap is a built-in tax. It means players who craft, trade and hold items always lose a bit to the server, which is a gentle sink.

> [!RULE] Check every pair
> For any item, the sell price must be less than the buy price. For any crafted item, the sell price of the result must be less than or equal to the total sell value of its ingredients. If not, you have built a money machine.

## Control bulk selling

Selling at a flat price forever turns shops into faucets. Pick at least one control:

- **Daily cap per player.** For example, sell up to 2,000 cobblestone a day at full price.
- **Falling price.** Every item sold reduces the price a little, then it recovers over time.
- **Stock limits.** The shop only has so much to buy. When it is full, it stops paying.
- **Global demand.** Server-wide price moves with total sales. Good, but harder to tune.

See [Formulas](toolkit/formulas.md) for ready-made falling-price formulas.

## Dynamic prices

Dynamic pricing means prices move with supply and demand. It adds life, and it can also swing wildly. If you use it:

- Set a **floor** and a **ceiling** (for example 20% to 300% of base).
- Change slowly. A single big sale should not crash the price.
- Reset daily or weekly so one bad day does not stick.

## Staff pricing checklist

- Base price from hours, not guesses
- Sell price at 20% to 40% of buy price
- No crafting loop returns more than it costs
- Bulk sales are capped or slow down
- Rare items cost more than their time alone
- A spreadsheet holds every price, so you can change it in one place

> [!NUGGET] Nugget says
> Put your prices in a spreadsheet first. When something is out of balance you can fix a formula in one place, instead of editing 400 lines in a config.

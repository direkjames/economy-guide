---
title: The faucet catalogue
desc: Every common way money enters a server, how risky each one is and how to keep it in check.
---

A faucet is any rule that **creates coins**. Faucets are not bad. Players need income to enjoy the game. The trick is knowing every faucet you have and giving each one a limit.

## Risk at a glance

| Faucet | Inflation risk | Main danger | Best control |
| --- | --- | --- | --- |
| Selling items to the admin shop | High | Machines and farms that sell forever | Daily caps, falling prices |
| Jobs | High | Easy repeatable actions pay too much | Per-action cap, diminishing pay |
| Mob and block rewards | High | AFK farms and grinders | Anti-AFK, cap per hour |
| Quests and bounties | Medium | Repeatable quests become a farm | Daily limit, scale with progress |
| Daily and playtime rewards | Medium | Alt accounts | Playtime requirement, per-IP limit |
| Vote rewards | Low to medium | Many votes by many alts | Cooldown, modest reward |
| Crates | Medium | Cash payouts inside crates | Pay in items, not coins, mostly |
| Bank interest | High over time | Grows with wealth | Cap the balance that earns interest |
| Events and giveaways | Low | Staff generosity | Budget per event, log it |
| Starting balance | Low | Alt accounts | Keep it small |
| Admin commands | Variable | Staff giving money to friends | Log, audit, separate test accounts |
| Selling Pokémon or rare items (modpack) | Medium | Duped or mass-bred items | See [Cobblemon](modes/cobblemon.md) |

## The common faucets in detail

### Selling to the admin shop

This is almost always your **biggest faucet**. A player mines for an hour, sells everything and earns the hourly rate. That is fine. The danger is automation: a farm that runs while the player is asleep sells every hour of every day.

How to tame it:
- Set sell prices of farmable goods lower than hand-mined ones.
- Add daily sell limits per item.
- Reduce the price as the player sells more in a day.
- Do not buy items at all that can be mass produced by machines (for example cobblestone, sugar cane or bone meal).

### Jobs

Jobs pay for repeated actions. Good for guiding players, risky when the action is trivial.

- Cap income per hour. If a player can earn 5x the intended rate by doing one trick, that trick is the real job.
- Pay less for actions that can be automated.
- Reduce pay after a certain number of actions per day.
- Pay for rare or skilled actions more than for easy ones.

### Mob and block rewards

Plugins that pay money when you kill a mob or break a block are easy to abuse with a grinder or an auto-clicker. If you use them, set a per-hour cap and enable anti-AFK checks.

### Quests, bounties and daily rewards

These are the **friendliest faucets** because they teach the game and give structure. Keep them small, make them repeat daily rather than hourly, and scale rewards by player progress so a veteran does not farm novice quests.

### Voting

Vote rewards bring players, so most servers keep them. Make the reward modest and mostly items or keys. Vote-bots and alts are common, so do not let votes pay large coin amounts.

### Crates

A crate that pays coins is a faucet. A crate that pays items is better because the item has to be sold, which goes through the shop's limits. Use coins as a small prize at most.

### Bank interest

Interest scales with wealth, so the richest earn the most. Without care it becomes the biggest faucet on the server.

> [!WARNING] Interest compounds
> A 1% daily interest on every balance would multiply a player's money about 38 times in a year. Cap the balance that earns interest, use low rates and consider tiers that earn less above a limit.

### Events and giveaways

Fun and effective, but they are a one-off faucet. Give each event a **budget**, note it in your weekly sheet and prefer items, cosmetics or titles over coins.

## Build a faucet table

Keep a simple table like this for your own server and update it every month:

| Faucet | Coins per player per hour (max) | Daily cap | Last reviewed |
| --- | --- | --- | --- |
| Shop sales | 2,000 | 20,000 | |
| Jobs | 800 | 8,000 | |
| Daily reward | 500 | 500 | |

> [!NUGGET] Nugget says
> If you cannot fill in the "max per player per hour" column for a faucet, that faucet is out of control. Find the number, then decide whether you like it.

Next: [taming faucets](faucets/taming.md).

---
title: Plugin and tool ideas
desc: What kinds of plugins an economy needs, the features worth looking for and a few well-known examples. No endorsements, just starting points.
---

This page is **plugin-neutral**: it tells you what to look for, not what to buy. Always check that a plugin supports your server version and software before you rely on it. Plugin names, features and support change, so verify before you commit.

## The building blocks

| Block | What it does | Examples to look at |
| --- | --- | --- |
| **Economy core** | Stores balances and lets other plugins use money | Vault (and compatible forks), EssentialsX economy, standalone economy plugins |
| **Admin shop** | Server-run buy and sell prices | ShopGUI+, EconomyShopGUI, DynamicShop |
| **Player shops** | Players run shops in the world or by GUI | ChestShop, QuickShop forks |
| **Auction house** | Listings, bids, search | Many auction plugins exist. Pick one with fees and expiry |
| **Jobs** | Pay for actions | Jobs Reborn and similar |
| **Banks and interest** | Savings, tiers, interest | Several bank plugins |
| **Land and rent** | Plots, claims, upkeep | GriefPrevention, Towny, Lands and plot plugins |
| **Multi-currency** | Extra currencies | CoinsEngine and similar |
| **Logging and rollback** | Tracks who did what | CoreProtect and similar |
| **Placeholders and display** | Show balances and stats | PlaceholderAPI and its expansions |
| **Permissions** | Controls who can do what | LuckPerms |
| **Anti-cheat and AFK** | Stops auto-clickers and idle income | An anti-cheat plus an AFK plugin |
| **Analytics and reporting** | Money tracking and reports | Some plugins, or your own export and spreadsheet |

These are examples, not recommendations. Choose by features and by how active the author is.

## What to look for in an economy plugin

- **Works with the standard economy interface** so other plugins can pay and charge.
- **Reliable storage.** A database option and safe saves. Losing balances is the worst bug.
- **Logging.** Every transaction recorded with who, what and when.
- **Transaction safety.** Handles negative numbers, huge numbers and doing two things at once.
- **Admin tools.** Set, give, take, reset, and a clear audit trail.
- **Offline balances.** Players can be paid or charged while offline.
- **Fast.** No lag when many players trade.
- **Active updates** for your server version.

## What to look for in a shop plugin

- Separate **buy** and **sell** prices
- **Daily limits**, stock or falling prices
- **Price changes without restart**
- **Categories and search**
- **Permission-based limits** (so ranks can see different shops)
- Clear **sell-all** and **sell-hand** features with limits
- A way to **exclude** certain items (like machine output)
- Logging of sales

## What to look for in an auction plugin

- Listing and sale **fees**
- **Listing limits** and **expiry**
- **Min and max** prices, or a price floor
- Search, sort and categories
- Offline sales: sellers get paid even when away
- Logging, and a way to remove listings

## What to look for in a jobs plugin

- Configurable **pay per action**, with caps
- **Diminishing returns** or daily limits
- An **anti-AFK** and anti-farm option (for example ignoring spawner mobs)
- Level progression with rising costs
- Permissions per job

## Taxes and fees

Some economy and shop plugins have built-in transfer taxes or fees. If yours do not, you can:

- Use a plugin that supports transaction fees
- Take fees in shop and auction plugins
- Use a small custom plugin or script
- Apply rent and upkeep through your land plugin

Check that fees apply to **every** trade path, or players will use the one that has none.

## Modpack servers

For a Fabric or NeoForge pack, plugin lists do not apply. Look for **mod equivalents**, such as economy API mods, currency mods and shop mods, or use a hybrid server that supports plugins. See [Cobblemon](modes/cobblemon.md).

## Setup advice

- Keep the number of economy plugins small. Each one is another thing to balance.
- Install on a test server first and run the loop test.
- Back up economy data daily.
- Keep a list of every plugin that creates or removes money, in one document.
- Write the permissions down so staff know who can do what.

> [!WARNING] Back up before updates
> Updating an economy plugin can change how it stores data. Back up balances before every update and test on a copy first.

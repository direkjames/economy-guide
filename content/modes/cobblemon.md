---
title: Cobblemon modpack
desc: Economy advice for a server where players catch, battle and trade creatures. Includes what changes when the server runs on mods instead of plugins.
---

A Cobblemon server is built around catching and battling creatures, not only mining. The economy has to value things like captures, battles and rare finds.

> [!WARNING] Check your own pack
> Modpack servers are usually built on Fabric or NeoForge instead of Paper. That means normal plugin advice does not always apply and the available economy tools depend on your pack. Names and features change with versions, so verify what your pack includes before relying on any of this.

## What makes it different

- **Value lives in creatures.** Rare, shiny or well-trained creatures are worth far more than any block.
- **Players spend on gear**: capture balls, healing items, held items, evolution items, training items.
- **Income comes from battles and catches** as much as from mining and farming.
- **Trading creatures is the main player market.** It is harder to price than items.
- **Duping and trade abuse** can wreck value quickly.

## Faucets

| Faucet | Risk | Control |
| --- | --- | --- |
| NPC trainer or battle rewards | High if repeatable | Cooldowns, daily caps |
| Selling caught creatures or items to the server | High | Low prices, caps, no buying of mass-caught common creatures |
| Tournaments and events | Medium | Budget each event |
| Quests and daily tasks | Medium | Daily limits, scale with progress |
| Gym or boss-style rewards | Medium | One-time or weekly |
| Standard shop sales (mining, farming) | Medium | Same rules as other modes |

Be careful with repeatable battles. If a player can beat the same trainer 200 times for money, that fight is a job with no cap.

## Sinks

- **Capture balls**, especially better ones. They are a constant sink because players use them.
- **Healing and revival items.**
- **Evolution and training items.**
- **Held items and boosters.**
- **Cosmetics**: outfits, trails, trainer titles.
- **Shop items for base building.**
- **Fees on creature trading** (a small percentage to the server).
- **Entry fees for events** and special areas.
- **Breeding or hatching costs**, if available in your pack.
- **Limited-time shops** for rare items.

## Pricing creatures

If you let players sell creatures to each other, you need some guardrails:

- Let the **market** set prices, but consider a minimum fee.
- Tax trades by a percentage (3% to 8%) to create a sink.
- Limit the number of listings per player.
- Log trades of rare or shiny creatures.
- Consider a "protected" tier of rare creatures that cannot be sold for coins but can be traded for items or other creatures.

If you sell creatures to players through the server, charge a lot and use limited stock.

## Rare and shiny hunting

Rare spawns are the endgame for many players. Treat them as a controlled part of the economy:

- Do not add a way to buy rare creatures cheaply.
- Be strict about duplication and mass-farming.
- Events with rare prizes are best as **time-limited** and **limited stock**.
- Make sure rare drops are not tradable for huge sums of coins without a fee.

## Economy mods and tools

Modpack servers need an economy mod, or a hybrid server that supports plugins. A few examples that exist at the time of writing:

- A **currency and shop mod** made for the pack (for instance, "CobbleDollars" is one popular choice)
- An **economy API mod** for server-side balances (for example "Impactor")
- A **plugin-capable hybrid** server if you want to reuse plugin tools

Always check that your chosen option supports your pack version, saves balances reliably and offers logs and admin commands. See [Plugin ideas](toolkit/plugins.md) for features to look for.

## Starting out

- A starter kit with a few capture balls and healing items.
- A first goal that rewards catching and battling.
- Cheap capture balls for the first hours.
- A shop that buys common drops at modest prices.

## Exploits to watch

- Duplicating items or creatures
- Auto-battling NPCs overnight
- AFK catching in busy spawn areas
- Trading creatures between alts to move money
- Buying cheap creatures from the shop and selling them higher
- Selling large numbers of common creatures to the server

## Checklist for Cobblemon

- Cap money from repeatable battles
- Do not buy common creatures at meaningful prices
- Use capture balls, healing and evolution items as main sinks
- Tax creature trades
- Log trades of rare and shiny creatures
- Check your pack's economy mod for logs and admin tools
- Anti-AFK for catching and battling areas

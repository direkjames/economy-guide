---
title: Taxes and fees
desc: Which taxes work on a Minecraft server, sensible rates and the rules that keep them fair.
---

Taxes are the sink most owners reach for first. Used well they are quiet and steady. Used badly they annoy everyone and push players to trade outside the system.

## Where does the tax money go?

You have two options, and you should pick one on purpose:

- **Burn it.** The coins are destroyed. This is a real sink.
- **Treasury.** The server keeps it and pays it back as prizes, events or public builds. Fun, but it is **not** a sink. Count it as money you will create again.

A good mix is to burn most of it and recycle a small share into community projects.

## The taxes that work

| Tax or fee | Suggested rate | Who pays | Notes |
| --- | --- | --- | --- |
| **Player transfer tax** (`/pay`) | 2% to 5% | The sender | Skip tiny amounts so it does not feel petty |
| **Auction listing fee** | 1% to 3% | Seller, at listing | Stops spam listings. Not refunded |
| **Auction sale fee** | 3% to 8% | Seller, at sale | The core marketplace sink |
| **Player shop sales tax** | 2% to 5% | Seller | Should match auction rules so it is fair |
| **Admin shop spread** | 60% to 80% gap | Everyone | Built in, no extra tax needed |
| **Wealth tax** | 0.5% to 2% per week | Balances above a threshold | Exempt new players. Keep the rule simple |
| **Plot or shop rent** | Match its value | Owner | Recurring sink |
| **Bank withdrawal fee** | 0% to 2% | Depositor | Optional |
| **Luxury cosmetics fee** | Built into price | Buyer | Always better than a separate tax |
| **Death tax** | 0% to 5% of balance | Player | Use carefully. Many players hate it |

> [!EXAMPLE] How big can a tax sink be?
> Your players trade 2 million coins per day through `/pay` and the auction house. A 4% average tax destroys 80,000 coins a day. That alone covers most of a 100,000 coin faucet.

## Rules for good taxes

1. **Visible.** Tell players the rate before they confirm. A message such as "Fee: 4% (40 coins)" is enough.
2. **Simple.** Fewer than three tax types. If players need a calculator, it is too complex.
3. **Proportional.** A percentage works better than a flat fee, because a flat fee punishes small trades and barely touches big ones.
4. **Predictable.** Do not change rates every week. Change slowly and announce it.
5. **Exempt the basics.** New players and very small transactions should pay nothing.
6. **Hard to dodge.** A tax on `/pay` can be avoided by trading items. Add a tax or fee on the shop or auction paths too, and watch for suspicious trades.

## Avoiding tax dodging

Watch for these common ways to skip tax:

- Trading valuables for cheap items (player A "sells" a diamond block for 1 coin and a deal on the side)
- Using chest shops to move money without the main marketplace
- Splitting a large payment into many small ones to stay under a threshold
- Alt accounts moving money between themselves

Ways to respond:

- Put the same fee on every trade path.
- Log large or repeated transfers and review them.
- Treat obvious abuse as an exploit and enforce rules fairly. See [Stopping exploits](fair/exploits.md).

## Wealth tax: handle with care

A wealth tax works against hoarding but is the most disliked tax. If you use one:

- Exempt a base amount (for example the first 1 million coins) so only the rich are affected.
- Use a small weekly rate, not a large one-off.
- Offer a way to avoid it by spending, such as a luxury shop or a donation project with perks.
- Explain **why** in public: "We want money to be spent, not buried."

> [!WARNING] Do not tax what the player cannot control
> Taxes on kills, drops or normal movement feel like punishment. Tax **choices**: trades, spending and ownership.

## Starting rates for a new server

| Item | Starting rate |
| --- | --- |
| `/pay` tax | 3% (free under 100 coins) |
| Auction listing fee | 1% |
| Auction sale fee | 5% |
| Player shop tax | 3% |
| Admin shop sell price | 30% of buy price |
| Wealth tax | None until you need it |

Run for two weeks, read the numbers from [Tracking the economy](inflation/tracking.md) and adjust by small steps.

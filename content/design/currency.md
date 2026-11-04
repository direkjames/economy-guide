---
title: Currency design
desc: One currency or two, how many decimals, what starting money to give, and what a coin should be worth.
---

## One currency or two?

| Option | Good for | Watch out for |
| --- | --- | --- |
| **One currency** | Most servers. Easy to explain and balance | Everything competes for the same coins |
| **Two currencies** (earned plus premium) | Servers with prestige items, seasonal rewards or crates | Two economies to balance, and conversion becomes an exploit |

If you add a second currency, follow three rules:

1. It must be **earned**, not bought with the main currency at a fixed rate. A fixed exchange rate turns the weaker currency into a loophole.
2. It should buy things the main currency cannot: cosmetics, titles, convenience.
3. Cap how much of it a player can earn per day.

> [!TIP] Real money
> If your server sells ranks or perks for real money, keep them cosmetic or convenience only. Never sell main-currency coins for cash. It wrecks fairness, and Mojang's rules on selling gameplay advantages have changed over the years, so check the current Commercial Usage Guidelines before you sell anything.

## Whole numbers or decimals?

Use whole numbers for most items and a single decimal for rates only if you must. Players find "12,450" easier than "12,450.37". Small decimals also cause rounding bugs when plugins split payments or apply percentages.

If your plugin allows decimals, test a 1% tax on a 1-coin trade. Many plugins round it to zero, which lets players avoid tax by trading in tiny pieces.

## Scale: how big should a coin be?

Pick a scale where **one early hour pays a few hundred to a few thousand coins**. Smaller numbers feel cramped, and huge numbers such as billions look silly and risk overflow bugs.

| Scale | Early hour earns | Feel |
| --- | --- | --- |
| Small | 50 to 200 | Every coin matters. Hard to tune prices |
| Medium (recommended) | 500 to 3,000 | Comfortable range with room to grow |
| Large | 10,000+ | Impressive numbers, easy to lose track of |

## Starting balance

Give new players enough for **30 to 60 minutes of early-game progress**, not more. A large starting balance feeds alt-account abuse, because anyone can make ten accounts and collect ten gifts.

Better ways to help new players: a starter kit, a short chain of early quests and cheap first purchases. See [Fairness](fair/fairness.md).

## What anchors the currency?

A currency needs something that gives it meaning. Choose an anchor and keep it stable:

- **A common item.** For example, "1 coin is about one stack of cobblestone's effort", or "100 coins is about 10 minutes of early work".
- **A rank or progression price.** If the first rank costs 10,000, then 10,000 is a meaningful milestone and everything else is measured against it.
- **A big goal.** Something only rich players can afford, like a prime plot or an expensive cosmetic.

Without an anchor, players have no idea whether 5,000 is a lot, and prices drift.

## Use a treasury or not?

A **treasury** is a server account that collects taxes and fees. There are two ways to run it:

- **Burn it.** Coins are removed. This is a true sink.
- **Recycle it.** Coins go back out as event prizes or public projects. This is not a sink, it is a transfer. It can be great for community feel, but count it as a faucet when you measure.

Whichever you pick, be honest about it in your numbers. See [Taxes and fees](sinks/taxes.md).

## Checklist

- One main currency, a second only if there is a clear reason
- Whole numbers wherever possible
- Early hour earns a few hundred to a few thousand coins
- Starting balance equals 30 to 60 minutes of play
- A named anchor (item, rank price or big goal)
- A decision on burn versus recycle for tax money

---
title: Tracking the economy
desc: Which numbers to write down every week, how to log money safely and how to build a one-page economy sheet.
---

You cannot balance what you do not measure. The good news: a handful of numbers, written down once a week, tells you nearly everything.

## The weekly sheet

Create a spreadsheet with one row per week and these columns:

| Column | How to get it |
| --- | --- |
| Date | The same day each week |
| Active players | Players who logged in that week |
| Total money | Sum of all balances (many economy plugins can show this, or use a command or database query) |
| Money per active player | Total money divided by active players |
| Faucets per day | Average coins created per day, from logs or plugin stats |
| Sinks per day | Average coins destroyed per day |
| Sinks vs faucets (%) | Sinks divided by faucets |
| Top 10% share | Share of money held by the richest 10% of players |
| Price index | Sum of median prices of your basket |
| Notable events | Anything you changed or ran this week |

Add a chart of **money per player** and **sinks vs faucets** over time. These two lines tell most of the story.

## What to log

Turn on logging for anything that moves money:

- Every admin money command (who, who to, how much)
- Every transfer above a size threshold (for example 10,000 coins)
- Shop sales and purchases by item
- Job, quest and reward payouts by source
- Tax and fee totals
- Plugin errors involving money

Keep logs long enough to look back at least a month. Review the biggest transactions each week.

## Alerts worth setting up

- A balance jump of more than 10 times a player's usual weekly income
- A new account that earns far above average
- Many transfers between the same two accounts
- A sudden jump in total money
- A big sell order of a normally rare item

> [!TIP] Make it easy for staff
> Put the weekly sheet in a shared document and link it in your staff channel. A short "economy report" post each week builds the habit.

## How to count faucets and sinks

If your plugins do not report them directly, estimate:

1. **Faucets**: add up all payouts from jobs, shop sales, quests, rewards, crates, votes and interest. Use logs, or a plugin that reports by source.
2. **Sinks**: add up all purchases from admin shops, taxes, fees, rent, rank-ups, cosmetics and repair costs.
3. **Check:** the change in total money should be about faucets minus sinks. If the numbers do not match, you are missing a source. Find it. That missing source is often the real problem.

> [!RULE] The sanity check
> Total money change = faucets - sinks. If your measured numbers do not add up, something is hidden. Hunt it down.

## Reading your charts

| What you see | What it likely means |
| --- | --- |
| Money per player rising steadily | Faucets ahead of sinks. Add a sink or tighten a faucet |
| Money per player jumps then flat | An event or exploit. Check that week's notes |
| Money per player falling | Sinks ahead of faucets, or a reset worked |
| Price index rising, money flat | Items getting scarce, or demand shifted. Check supply |
| Top 10% share climbing | Wealth is concentrating. Add catch-up and rich-player sinks |

## Run the health check weekly

The [health check](toolkit/health-check.md) uses these same numbers and gives you a verdict in one click. Combine it with the [weekly checklist](toolkit/checklist.md).

## Your first month

| Week | Goal |
| --- | --- |
| 1 | Set up the sheet and logging. Do not change anything |
| 2 | Record the numbers. Find your biggest faucet and biggest sink |
| 3 | Make one small change and note it |
| 4 | Compare to week 2 and decide what to do next |

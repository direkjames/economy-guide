---
title: Formulas and examples
desc: Every calculation in this guide in one place, with worked examples you can copy into a spreadsheet.
---

None of this needs more than basic maths. Every formula is written so you can paste it into a spreadsheet.

## Health numbers

### Money per active player

`money per player = total money / active players`

Track this weekly. It is the most honest sign of inflation.

### Weekly change in money per player

`change = (this week per player / last week per player - 1) x 100`

> [!EXAMPLE] Example
> Last week: 1,000,000 coins across 100 players, so 10,000 each. This week: 1,150,000 across 105 players, so 10,952 each. Change = (10,952 / 10,000 - 1) x 100 = **+9.5%**. That is a "watch" result.

### Sinks vs faucets

`ratio = sinks per day / faucets per day x 100`

Aim for 80% to 100% on a settled server.

### Days of income

`days of income = average balance / (faucets per day / active players)`

Shows how many days of play it would take to earn the average balance. 7 to 60 is comfortable.

### Wealth share

`top 10% share = money held by the richest 10% / total money x 100`

### Price index

Record the median auction price of 8 to 12 common items each week. Add them up. Divide this week by your starting week and multiply by 100.

`index = this week's basket total / first week's basket total x 100`

An index of 100 is your baseline. 110 means prices are 10% higher.

## Pricing

### Price from time

`base price = hours to obtain x hourly rate`

### Sell price from buy price

`sell price = buy price x 0.25 to 0.40`

### Loop check

`profit per cycle = sell price of output - cost of inputs`

If profit per cycle is above zero for any chain, you have a loop.

## Controlling bulk selling

### Falling price per item sold

`price = base x (1 - decay) ^ items sold today`, never below a floor of 20% to 30% of base

> [!EXAMPLE] Example
> Base price 10, decay 0.2% per item, floor 30% (3 coins). After 100 sales the price is 10 x 0.998^100 = 8.2. After 500 it is 10 x 0.998^500 = 3.7. After 600 it hits the floor of 3.

### Daily cap with a slope

`multiplier = 1 for the first N items, then fall linearly to 0.25 by 3N, then stay at 0.25`

A simple way to explain it to players: "Full price for the first N each day. After that it drops."

### Dynamic price from stock

`price = base x (target stock / current stock) ^ k`, clamped between 0.2 x base and 3 x base

`k` is how strongly the price reacts. Start with 0.3 and raise it only if prices react too slowly.

## Taxes and income

### Tax on a transfer

`tax = amount x rate`, rounded **up** to at least 1 coin once the amount is above your free limit

Rounding down to zero lets players dodge tax with tiny trades.

### Tax drain per day

`daily drain = daily trade volume x average tax rate`

### Wealth tax

`weekly tax = (balance - exempt amount) x rate`, only when the balance is above the exempt amount

> [!EXAMPLE] Example
> Exempt amount 1,000,000. Rate 1% per week. A player with 3,000,000 pays (3,000,000 - 1,000,000) x 0.01 = 20,000. A player with 900,000 pays nothing.

## Interest

### Compound growth

`balance after n days = balance x (1 + daily rate) ^ n`

At 1% daily, money grows about 38 times in a year. At 0.1% daily, about 1.4 times. At 0.5% daily, about 6.2 times.

### Capped interest

`interest = min(balance, cap) x rate`

Cap the balance that earns interest. That keeps it a small faucet for everyone, not a huge one for the rich.

## Budgets

### Faucet budget per player

`max income per hour = hourly rate x 1.5`

If a player who uses every faucet earns more than 1.5 times the planned rate, tighten something.

### Event budget

`event budget = percent of daily faucets x daily faucets`

Keep events to something like 5% to 10% of a day's faucets.

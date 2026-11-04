---
title: The admin shop
desc: How to design a server-run shop that gives players a safe place to trade without becoming a money printer.
---

The admin shop (also called server shop or system shop) is where players buy from and sell to the server. It is the backbone of most economies, so small mistakes here are big.

## What the admin shop is for

1. **Give new players a place to start.** They need something to sell and something to buy.
2. **Set a price floor and ceiling.** Player markets stay near the admin price.
3. **Drain money** through the buy/sell gap.
4. **Let you steer behavior.** Cheap items encourage use. Expensive ones encourage trading.

## Design rules

### Sell low, buy high

- Players should sell to the shop for **20% to 40%** of the buy price.
- If a player can sell at 100 and buy at 100, it is a free storage system, and any small price mismatch becomes an exploit.

### Limit what the shop buys

Do not buy everything. Buy a **short list** of items that new players can get by hand. Leave out:
- Items made by auto-farms (cobblestone, sugar cane, kelp, bone meal, gunpowder, iron if you have iron farms)
- Rare or valuable items you want players to trade with each other
- Items that can be crafted into higher-priced ones

### Limit what the shop sells

- Basic building blocks, food, tools and consumables are fine.
- Rare items (elytra, tridents, nether stars) should not be in the shop, or should cost a lot.
- Limit stock for sensitive items.

### Use limits and slopes

Every item the shop buys needs a daily limit or a falling price. See [Pricing items](design/pricing.md).

### Keep categories small and clear

A shop with 400 items is hard to balance. Aim for under 150 and group them clearly. Fewer items are easier to audit.

## Shop pitfalls

| Pitfall | Why it hurts | Fix |
| --- | --- | --- |
| Same buy and sell price | Free storage and arbitrage | Use a spread |
| Selling ingredients above the result price | Loop: craft, sell, repeat | Run the loop test |
| Buying farm output | Machines become faucets | Remove from the sell list |
| Prices not updated | Items drift out of balance | Review monthly |
| Items everywhere | Overwhelming and hard to maintain | Trim to the essentials |
| No stock limit on rare items | Rich players empty the shop | Per-player and global limits |

## Dynamic shop or fixed shop?

| Type | Good | Bad |
| --- | --- | --- |
| **Fixed prices** | Predictable, easy to audit | Never reacts to supply |
| **Dynamic prices** | Reacts to what players do | Can swing wildly, needs a floor and ceiling |
| **Hybrid** | Fixed base with a small dynamic factor | More setup |

For most servers, fixed prices with sell limits are enough. Add dynamic pricing later if you like the extra life.

## Rotating and special shops

- **Daily or weekly rotation:** a few featured items at a discount creates interest.
- **Limited-stock shop:** rare cosmetics or items that sell out.
- **Event shops:** exchange event tokens for rewards.

Keep their prices above what the item is worth in the player market, so they act as sinks and not as faucets.

## Shop audit

Run this once per month:

1. Export all prices to a spreadsheet.
2. For every item, check sell price is below buy price.
3. For every recipe, check output sell price is below the sum of the ingredients' sell prices.
4. Sort by daily sales volume. Review the top 10 items and see if they should still be there.
5. Check for items that never sell. Remove or reprice them.

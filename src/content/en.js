import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Percentage Calculator',
    lead:
      'Work out any percentage in one step, and see the arithmetic behind the answer. Fill in any two fields and the third is calculated instantly — no sign-up, no ads inside the tool, and it keeps working offline once the page has loaded.',
    sections: [
      {
        id: 'how-to-calculate-percentages',
        heading: 'How to calculate a percentage',
        blocks: [
          'A percentage is just a fraction with 100 on the bottom. "20%" means 20 out of every 100, or 0.20 as a decimal. Every calculation on this page comes from that one idea, which is why four different-looking questions all reduce to the same small set of formulas.',
          { h: '1. What is X% of Y?' },
          { formula: 'result = base × (percentage ÷ 100)' },
          'This is the everyday case: a discount, a tip, a commission. To find 20% of 150, convert 20% to 0.20 and multiply: 150 × 0.20 = 30. A useful shortcut is that percentages are reversible — 20% of 150 and 150% of 20 are both 30, so you can flip the numbers around if one of them is easier to work with mentally.',
          { h: '2. X is what percent of Y?' },
          { formula: 'percentage = (part ÷ whole) × 100' },
          'Use this when you already have both numbers and want to know how they relate. If you scored 45 out of 180 on a test: 45 ÷ 180 = 0.25, and 0.25 × 100 = 25%. The order matters — the number you are measuring goes on top, the total goes on the bottom.',
          { h: '3. Increase or decrease a number by a percentage' },
          { formula: 'result = base × (1 + percentage ÷ 100)' },
          'Adding 15% to 120 gives 120 × 1.15 = 138. Removing 15% gives 120 × 0.85 = 102. Note that these do not cancel out: adding 15% and then removing 15% leaves you at 117, not 120, because the second percentage is applied to a larger number.',
          { h: '4. Percentage change between two numbers' },
          { formula: 'change = ((new − old) ÷ old) × 100' },
          'Going from 80 to 100 is ((100 − 80) ÷ 80) × 100 = 25% growth. Going from 100 back down to 80 is a 20% drop, not 25% — the starting value changed, so the same absolute difference is a different share of it. This asymmetry catches people out constantly and is worth internalising.'
        ]
      },
      {
        id: 'percentage-reference-table',
        heading: 'Percentage, fraction and decimal reference',
        blocks: [
          'The values below come up often enough that recognising them saves you reaching for a calculator at all.',
          {
            table: {
              head: ['Percentage', 'Fraction', 'Decimal', 'Quick method'],
              rows: [
                ['1%', '1/100', '0.01', 'Move the decimal point two places left'],
                ['5%', '1/20', '0.05', 'Take 10% and halve it'],
                ['10%', '1/10', '0.10', 'Move the decimal point one place left'],
                ['12.5%', '1/8', '0.125', 'Halve 25%'],
                ['20%', '1/5', '0.20', 'Double 10%'],
                ['25%', '1/4', '0.25', 'Halve, then halve again'],
                ['33.3%', '1/3', '0.333…', 'Divide by 3'],
                ['50%', '1/2', '0.50', 'Halve'],
                ['75%', '3/4', '0.75', 'Subtract a quarter'],
                ['100%', '1/1', '1.00', 'The number itself'],
                ['150%', '3/2', '1.50', 'The number plus half again']
              ]
            }
          },
          'Reading the table in the other direction is just as useful: if someone tells you a price rose "by a third", that is a 33.3% increase, and the multiplier you need is 1.333.'
        ]
      },
      {
        id: 'where-percentages-show-up',
        heading: 'Where percentages show up',
        blocks: [
          { h: 'Shopping and discounts' },
          'A "30% off" sign means you pay 70% of the original price. Stacked discounts multiply rather than add — 20% off followed by another 10% off is 0.8 × 0.9 = 0.72, so 28% off in total, not 30%.',
          { h: 'Tips and service charges' },
          'Tipping is a straight "X% of Y" calculation on the pre-tax total. The fastest mental method is to find 10% by moving the decimal point, then scale: 15% is 10% plus half of it again.',
          { h: 'Tax and VAT' },
          'Tax is usually added on top of a net price, so a 21% VAT rate means multiplying by 1.21. Going the other way — extracting tax from a gross price — means dividing by 1.21, not subtracting 21%.',
          { h: 'Grades and test scores' },
          'A score out of an arbitrary total is the "X is what percent of Y" case. 34 out of 40 is 85%.',
          { h: 'Pay and salary' },
          'A raise is a percentage increase on your current pay, but what matters is the increase net of inflation. A 3% raise in a year when prices rise 4% leaves you slightly worse off in real terms.',
          { h: 'Interest and growth' },
          'Interest compounds, which means each period applies its percentage to the previous result. 5% a year for three years is a factor of 1.05³ = 1.157, or 15.7% growth overall — noticeably more than the 15% you would get by adding.'
        ]
      },
      {
        id: 'common-mistakes',
        heading: 'Three mistakes worth avoiding',
        blocks: [
          { h: 'Percent and percentage points are not the same' },
          'If an interest rate moves from 4% to 5%, that is a rise of one percentage point but a 25% increase. News reports blur the two constantly, and the difference is large enough to change decisions.',
          { h: 'Percentage changes do not reverse symmetrically' },
          'A value that falls 50% needs to rise 100% to get back to where it started. In general, recovering from a drop of p% requires a gain of p ÷ (100 − p) × 100 percent.',
          { h: 'Averaging percentages ignores the base' },
          'A 90% pass rate on a class of 10 and a 50% pass rate on a class of 100 do not average to 70%. Weight each percentage by the size of its group, or work from the raw counts instead.',
          'Three more of these — choosing the wrong base, taking a percentage of a percentage, and misreading a percentile — are worked through in full on the common mistakes page.'
        ]
      },
      {
        id: 'the-rest-of-the-site',
        heading: 'The rest of the site',
        blocks: [
          'The calculator above handles the four general cases. The pages below take a single situation and go further into it, each with its own worked examples and reference tables.',
          {
            table: {
              head: ['Page', 'Use it when'],
              rows: [
                ['Discount calculator', 'A price is reduced, or you want the original price back from a sale price'],
                ['Tip calculator', 'You are splitting a bill and want to check local custom'],
                ['VAT and sales tax', 'Tax has to be added to, or stripped out of, a price'],
                ['Profit margin', 'You are pricing something and need margin rather than markup'],
                ['Salary raise', 'A pay offer needs converting to a percentage, or checking against inflation'],
                ['Percentage points', 'Two percentages need comparing and you want each measure named'],
                ['Percentage formulas', 'You want every formula and its inverse on one page'],
                ['Mental math', 'You want to stop needing a calculator for the common cases'],
                ['Common mistakes', 'A percentage result looks wrong and you want to know why']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: 'How do I calculate a percentage of a number?',
        a: 'Divide the percentage by 100 and multiply by the number. For 20% of 150: 20 ÷ 100 = 0.2, then 150 × 0.2 = 30.'
      },
      {
        q: 'How do I work out what percentage one number is of another?',
        a: 'Divide the part by the whole, then multiply by 100. 45 out of 180 is 45 ÷ 180 = 0.25, which is 25%.'
      },
      {
        q: 'How do I add a percentage to a price?',
        a: 'Multiply by 1 plus the percentage as a decimal. Adding 21% means multiplying by 1.21. To remove it again, divide by 1.21 rather than subtracting 21%.'
      },
      {
        q: 'What is the difference between percentage change and percentage points?',
        a: 'Percentage points measure the raw gap between two percentages. Percentage change measures that gap relative to the starting value. A move from 4% to 5% is one percentage point and a 25% change.'
      },
      {
        q: 'Why does a 50% loss need a 100% gain to recover?',
        a: 'Because the gain is calculated on the reduced value. 100 falling by 50% leaves 50, and going from 50 back to 100 is a doubling — a 100% increase.'
      },
      {
        q: 'Can this calculator use a comma as the decimal separator?',
        a: 'Yes. The separator control in the header switches between a dot and a comma, and the setting is remembered on your device.'
      },
      {
        q: 'Do two stacked discounts add together?',
        a: 'No, they multiply. 20% off then 10% off gives 0.8 × 0.9 = 0.72 of the original price, a 28% total discount.'
      },
      {
        q: 'Does the calculator show how the answer was reached?',
        a: 'Yes. Once two fields are filled, the result panel lists the arithmetic step by step using your own numbers, so you can check each line rather than trusting the total.'
      },
      {
        q: 'Is this percentage calculator free?',
        a: 'Yes. It is free to use, needs no account, and runs entirely in your browser — the numbers you type are never sent to a server.'
      }
    ]
  },

  discount: {
    title: 'Discount Calculator',
    lead:
      'Find the sale price after a percentage off, work backwards from a sale price to the discount you were actually given, and check what stacked offers really come to.',
    sections: [
      {
        id: 'how-discounts-work',
        heading: 'How a discount is calculated',
        blocks: [
          'A discount removes a share of the original price. "25% off" means you keep 75% of the price, so the arithmetic is a single multiplication rather than a subtraction:',
          { formula: 'sale price = original price × (1 − discount ÷ 100)' },
          'A €80 jacket at 25% off costs 80 × 0.75 = €60, and the amount saved is the €20 difference. Enter 80 as the base and −25 as the percentage above to see it worked through line by line.',
          'The multiplication form is worth preferring over "work out 25% of 80, then subtract it" even though both give €60. It is one operation instead of two, it extends straight to stacked offers, and it makes the reverse calculation obvious: if multiplying by 0.75 gets you there, dividing by 0.75 gets you back.',
          { h: 'Working backwards from the sale price' },
          'If you know both prices and want the discount, switch to the percentage change mode:',
          { formula: 'discount = ((original − sale) ÷ original) × 100' },
          'A jacket reduced from €80 to €60 is a 25% discount. This is the useful direction when a shop advertises "was/now" prices without stating a percentage — and the direction that catches out inflated "was" prices, since a large percentage off a price nobody ever paid is not a large saving.'
        ]
      },
      {
        id: 'original-price-from-sale-price',
        heading: 'Recovering the original price',
        blocks: [
          'The third direction is the one people ask for most and get wrong most: you know the sale price and the discount, and you want the price before the reduction.',
          { formula: 'original price = sale price ÷ (1 − discount ÷ 100)' },
          'A coat on sale at £91 after 30% off was £91 ÷ 0.70 = £130 before. The instinct to add 30% back is wrong: £91 + 30% is £118.30, nearly £12 short, because the 30% was taken off the larger original price, not the smaller sale price.',
          { note: 'The rule generalises. To undo any percentage change you divide by the multiplier you would have multiplied by. Adding the same percentage back never returns you to the starting point.' },
          {
            table: {
              head: ['Discount', 'You pay (multiplier)', 'To recover the original, divide by', 'Adding the % back gives'],
              rows: [
                ['10%', '0.90', '0.90', '99.0% of the original'],
                ['20%', '0.80', '0.80', '96.0% of the original'],
                ['25%', '0.75', '0.75', '93.8% of the original'],
                ['30%', '0.70', '0.70', '91.0% of the original'],
                ['40%', '0.60', '0.60', '84.0% of the original'],
                ['50%', '0.50', '0.50', '75.0% of the original'],
                ['70%', '0.30', '0.30', '51.0% of the original']
              ]
            }
          },
          'The last column is the size of the error if you add the percentage back instead of dividing, and it grows fast: on a 50%-off item the shortcut leaves you a quarter short of the real original price.'
        ]
      },
      {
        id: 'stacked-discounts',
        heading: 'Stacked discounts and coupons',
        blocks: [
          'Discounts applied one after another multiply — they never simply add up. A 30% seasonal reduction followed by a 20% coupon leaves you paying 0.70 × 0.80 = 0.56 of the original, a 44% total discount rather than 50%.',
          {
            table: {
              head: ['First discount', 'Second discount', 'You pay', 'True total discount'],
              rows: [
                ['10%', '10%', '81%', '19%'],
                ['20%', '10%', '72%', '28%'],
                ['30%', '20%', '56%', '44%'],
                ['50%', '20%', '40%', '60%'],
                ['50%', '50%', '25%', '75%']
              ]
            }
          },
          { note: 'The order of stacked discounts never changes the final price — multiplication is commutative. What does change it is whether tax is applied before or after the discount.' },
          'Two 50% discounts are the clearest case: they leave you paying a quarter of the price, not nothing. Any claim that stacked offers add to 100% off is arithmetically impossible, because each multiplier is greater than zero.'
        ]
      },
      {
        id: 'discounts-and-tax',
        heading: 'Discounts, tax and the order of operations',
        blocks: [
          'Where tax sits relative to the discount changes what you pay, which is why receipts sometimes disagree with a mental estimate.',
          'Under a VAT system the shelf price already includes tax, so a percentage off the shelf price reduces the tax proportionally and the order is invisible to you. Under a US-style sales tax the price is quoted before tax, and the discount is applied to that pre-tax figure before tax is added to the reduced amount.',
          { formula: 'you pay = price × (1 − discount ÷ 100) × (1 + tax ÷ 100)' },
          'A $200 item with 25% off and 8% sales tax is 200 × 0.75 × 1.08 = $162. Applying the tax first and the discount afterwards gives the identical $162 — multiplication does not care about order. What does matter is a discount that is legally applied only to part of the bill, such as a coupon that excludes taxes and fees, in which case the two operations are no longer applied to the same base.',
          { h: 'Percentage off versus amount off' },
          'A "$20 off" voucher and a "20% off" voucher are the same only at a price of $100. Below that the fixed amount is worth more, above it the percentage is. If you are choosing between two vouchers on a $160 basket, $20 off beats 10% off but loses to 20% off.'
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a discounted price',
      steps: [
        { name: 'Enter the original price', text: 'Type the full price into the base field.' },
        { name: 'Enter the discount', text: 'Type the discount as a negative percentage, for example −25 for 25% off.' },
        { name: 'Read the sale price', text: 'The result panel shows the price you will pay, and the difference from the original is your saving.' },
        { name: 'Check the working', text: 'The steps under the result show the multiplier used and the multiplication itself, so you can confirm the figure rather than take it on trust.' }
      ]
    },
    faq: [
      {
        q: 'How do I calculate 20% off a price?',
        a: 'Multiply the price by 0.80. A $45 item at 20% off costs 45 × 0.8 = $36, saving $9.'
      },
      {
        q: 'How do I find the original price from a discounted price?',
        a: 'Divide the sale price by 1 minus the discount. A $60 item after 25% off was 60 ÷ 0.75 = $80 originally. Adding 25% back to $60 gives $75, which is wrong.'
      },
      {
        q: 'Do a 30% and a 20% discount make 50% off?',
        a: 'No. They multiply to 0.7 × 0.8 = 0.56, which is 44% off in total.'
      },
      {
        q: 'Does it matter which discount is applied first?',
        a: 'No. Multiplication is commutative, so 30% then 20% and 20% then 30% both leave you paying 56% of the original. Order only matters when a discount applies to part of the bill rather than all of it.'
      },
      {
        q: 'Is a $20 voucher better than 20% off?',
        a: 'Only below $100. At exactly $100 they are equal, and above it the percentage saves more. On a $160 basket, 20% off saves $32 against the voucher\'s $20.'
      },
      {
        q: 'How much do I save at 33% off?',
        a: 'One third of the price. Divide by 3 for the saving and multiply by 0.67 for what you pay — a $90 item costs about $60.30 and saves $29.70.'
      }
    ]
  },

  tip: {
    title: 'Tip Calculator',
    lead:
      'Work out a gratuity at any percentage, split it across a table, and check it against local custom before you pay.',
    sections: [
      {
        id: 'how-to-calculate-a-tip',
        heading: 'How to calculate a tip',
        blocks: [
          'A tip is a plain percentage of the bill:',
          { formula: 'tip = bill × (percentage ÷ 100)' },
          'On a $45 bill, a 10% tip is $4.50 and an 18% tip is $8.10. Whether you calculate on the pre-tax or post-tax total is a matter of local convention; in the United States either is considered acceptable, and the difference is usually under a dollar.',
          { h: 'The mental shortcut' },
          'Find 10% by moving the decimal point one place left, then build from there. On an $86 bill, 10% is $8.60, so 15% is $8.60 + $4.30 = $12.90 and 20% is $17.20. Almost every tip you will ever need is a combination of 10%, half of 10%, and double 10%.',
          {
            table: {
              head: ['You want', 'Method from 10%', 'On a $86 bill'],
              rows: [
                ['5%', 'Half of 10%', '$4.30'],
                ['10%', 'Move the decimal point', '$8.60'],
                ['12.5%', '10% plus a quarter of it', '$10.75'],
                ['15%', '10% plus half of it', '$12.90'],
                ['18%', 'Double 10%, minus a fifth of 10%', '$15.48'],
                ['20%', 'Double 10%', '$17.20'],
                ['25%', 'Double 10%, plus half of 10%', '$21.50']
              ]
            }
          }
        ]
      },
      {
        id: 'splitting-the-bill',
        heading: 'Splitting the bill',
        blocks: [
          'The simple case is one division: add the tip to the bill, then divide by the number of people.',
          { formula: 'each person pays = bill × (1 + tip ÷ 100) ÷ people' },
          'A $140 bill with a 18% tip is $165.20, which across five people is $33.04 each. Rounding each share up to the next whole unit is the usual way to avoid the total coming up short — five people paying $34 covers the bill with $4.80 to spare, which is generally the intention.',
          { h: 'Splitting unevenly' },
          'When people ordered very differently, splitting the tip in proportion to each person\'s subtotal is fairer than splitting it equally, and it is one multiplication: everyone pays their own items times the same factor.',
          { formula: 'your share = your items × (1 + tip ÷ 100)' },
          'On a table where one person ordered $18 and another $62, an 18% tip means they pay $21.24 and $73.16. Splitting the tip equally instead would have the cheaper diner subsidising the more expensive one by about $4.',
          { note: 'Card machines that offer tip percentages often calculate them on the total including tax and any service charge. On a large bill that can be several units more than you intended — check the base figure the machine is using before accepting a suggested percentage.' }
        ]
      },
      {
        id: 'tipping-customs',
        heading: 'Tipping customs around the world',
        blocks: [
          'Tipping norms vary widely, and over-tipping in a country that does not expect it can be as awkward as under-tipping in one that does.',
          {
            table: {
              head: ['Country', 'Restaurant norm', 'Notes'],
              rows: [
                ['United States', '15–20%', 'Expected; staff wages assume it'],
                ['Canada', '15–20%', 'Similar to the US'],
                ['United Kingdom', '10–12.5%', 'Often already added as a service charge'],
                ['Ireland', '10–15%', 'Common in restaurants, rare in pubs'],
                ['France', 'Rounding up', 'Service is included by law'],
                ['Germany', '5–10%', 'Round up to a convenient figure'],
                ['Netherlands', '5–10%', 'Rounding up is normal'],
                ['Italy', '0–10%', 'A cover charge often replaces the tip'],
                ['Spain', '0–10%', 'Small change is normal'],
                ['Portugal', '5–10%', 'Optional, usually rounding up'],
                ['Brazil', '10%', 'Usually printed on the bill'],
                ['Mexico', '10–15%', 'Expected in restaurants'],
                ['Japan', 'None', 'Tipping can cause offence'],
                ['China', 'None', 'Not customary outside tourist hotels'],
                ['Australia', '0–10%', 'Optional, for good service'],
                ['New Zealand', '0–10%', 'Optional, for good service']
              ]
            }
          },
          { note: 'Always check the bill before adding a tip — a service charge may already be included, in which case an extra gratuity is entirely optional.' },
          { h: 'Service charge is not the same as a tip' },
          'A service charge is a line on the bill set by the restaurant; a tip is money you choose to add. In several countries a service charge is legally part of the bill and you are paying it whether or not the service was good. Where a discretionary service charge has been added, the percentage on the card machine is usually calculated on top of it, which is how a "15%" tip quietly becomes 27% of the food.',
          { h: 'Beyond restaurants' },
          'Common ranges elsewhere in the United States are $1–2 per drink at a bar, 15–20% for taxis, $2–5 per bag for hotel porters, and 15–20% for hairdressers. These are conventions rather than arithmetic, but the same 10%-and-scale method gets you there.'
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a tip',
      steps: [
        { name: 'Enter the bill total', text: 'Type the amount of the bill into the base field.' },
        { name: 'Enter the tip percentage', text: 'Type the percentage you want to leave, such as 15 or 20.' },
        { name: 'Read the tip amount', text: 'The result is the gratuity. Add it to the bill for the total, then divide by the number of diners to split it.' },
        { name: 'Check against the bill', text: 'Confirm no service charge has already been added, since a percentage on top of one costs considerably more than it looks.' }
      ]
    },
    faq: [
      {
        q: 'How much is a 20% tip on $50?',
        a: '$10. Take 10% of the bill ($5) and double it.'
      },
      {
        q: 'Should I tip on the pre-tax or post-tax amount?',
        a: 'Either is acceptable in the US. Tipping on the pre-tax subtotal is the stricter convention and costs slightly less.'
      },
      {
        q: 'What if a service charge is already on the bill?',
        a: 'Then the tip has been collected for you. Anything extra is discretionary and usually reserved for exceptional service.'
      },
      {
        q: 'How do I split a bill with a tip between four people?',
        a: 'Multiply the bill by 1 plus the tip as a decimal, then divide by four. A $120 bill at 18% is $141.60, or $35.40 each.'
      },
      {
        q: 'Is it fair to split the tip equally when orders differed?',
        a: 'It costs the lighter eaters more. Multiplying each person\'s own subtotal by the same factor keeps everyone\'s tip proportional to what they ordered.'
      },
      {
        q: 'What is the fastest way to work out 15% in my head?',
        a: 'Move the decimal point one place left for 10%, halve that for 5%, and add the two. On a $64 bill: $6.40 + $3.20 = $9.60.'
      }
    ]
  },

  vat: {
    title: 'VAT and Sales Tax Calculator',
    lead:
      'Add VAT or sales tax to a net price, or strip it back out of a gross price to find the amount before tax.',
    sections: [
      {
        id: 'adding-and-removing-tax',
        heading: 'Adding and removing tax',
        blocks: [
          { h: 'Adding tax to a net price' },
          { formula: 'gross = net × (1 + rate ÷ 100)' },
          'At a 20% rate, a net price of 250 becomes 250 × 1.20 = 300, of which 50 is tax.',
          { h: 'Removing tax from a gross price' },
          { formula: 'net = gross ÷ (1 + rate ÷ 100)' },
          'This is the step people most often get wrong. A gross price of 300 at 20% VAT is not 300 − 20% = 240. It is 300 ÷ 1.20 = 250, because the 20% was charged on the smaller net figure. The tax portion is the 50 difference.',
          { note: 'Rule of thumb: to add tax you multiply, to remove it you divide. Subtracting the percentage from the gross price always understates the net amount.' }
        ]
      },
      {
        id: 'why-subtracting-is-wrong',
        heading: 'Why subtracting the rate is wrong',
        blocks: [
          'It is worth seeing the error in full, because it is the single most common mistake in invoicing and it always goes the same direction — it understates the net figure and overstates the tax.',
          'Take a gross price of £600 at 20% VAT. The correct net is 600 ÷ 1.20 = £500, so the VAT is £100. Subtracting 20% from £600 gives £480 and implies £120 of VAT — £20 too much on a single invoice.',
          'The reason is that the two percentages are taken from different bases. The 20% was charged on £500; subtracting 20% takes it from £600. The gap between the two answers is always the tax on the tax.',
          { formula: 'tax share of gross = rate ÷ (100 + rate) × 100' },
          'At 20%, tax is 20 ÷ 120 = 16.67% of what you hand over, not 20%. That figure — the "VAT fraction" — is what the third column of the table below gives you, and it is the number to reach for when you need the tax out of a gross total in one step.',
          {
            table: {
              head: ['Rate', 'Multiply by (to add)', 'Divide by (to remove)', 'Tax share of gross'],
              rows: [
                ['5%', '1.05', '1.05', '4.76%'],
                ['7.5%', '1.075', '1.075', '6.98%'],
                ['10%', '1.10', '1.10', '9.09%'],
                ['17%', '1.17', '1.17', '14.53%'],
                ['19%', '1.19', '1.19', '15.97%'],
                ['20%', '1.20', '1.20', '16.67%'],
                ['21%', '1.21', '1.21', '17.36%'],
                ['22%', '1.22', '1.22', '18.03%'],
                ['23%', '1.23', '1.23', '18.70%'],
                ['24%', '1.24', '1.24', '19.35%'],
                ['25%', '1.25', '1.25', '20.00%'],
                ['27%', '1.27', '1.27', '21.26%']
              ]
            }
          },
          'The last column explains a common surprise: at a 25% VAT rate, tax is 20% of what you actually hand over, not 25%.'
        ]
      },
      {
        id: 'vat-vs-sales-tax',
        heading: 'VAT versus sales tax',
        blocks: [
          'VAT is charged at every stage of production, with businesses reclaiming what they paid on inputs, and it is normally quoted inclusive of tax on consumer price tags. US sales tax is charged once at the point of final sale and is normally quoted exclusive, added at the till. The arithmetic is the same; what differs is whether the number you are looking at already contains the tax.',
          {
            table: {
              head: ['', 'VAT / GST', 'US sales tax'],
              rows: [
                ['Charged at', 'Every stage of the supply chain', 'The final sale only'],
                ['Price on the tag', 'Usually includes tax', 'Usually excludes tax'],
                ['Business cost', 'Reclaimed as input tax', 'Exempt with a resale certificate'],
                ['Rate set by', 'National government', 'State, county and city, combined'],
                ['Typical range', '5–27%', '0–10.5% combined']
              ]
            }
          },
          'The practical consequence for a traveller is that a European price tag is what you pay, while a US price tag is not. The practical consequence for a business is that the gross figure on a European invoice needs dividing, while a US subtotal needs multiplying.',
          { h: 'Standard rates in common jurisdictions' },
          'Rates change, and most countries also operate reduced rates for food, books, transport or medicine, so treat this as a starting point rather than as tax advice — check the current rate with the relevant authority before invoicing.',
          {
            table: {
              head: ['Jurisdiction', 'Standard rate', 'Note'],
              rows: [
                ['United Kingdom', '20%', 'Reduced 5%, zero-rated food and books'],
                ['Germany', '19%', 'Reduced 7%'],
                ['France', '20%', 'Reduced 10%, 5.5% and 2.1%'],
                ['Spain', '21%', 'Reduced 10% and 4%'],
                ['Italy', '22%', 'Reduced 10%, 5% and 4%'],
                ['Netherlands', '21%', 'Reduced 9%'],
                ['Portugal', '23%', 'Reduced 13% and 6%'],
                ['Ireland', '23%', 'Reduced 13.5% and 9%'],
                ['Sweden', '25%', 'Reduced 12% and 6%'],
                ['Hungary', '27%', 'Highest standard rate in the EU'],
                ['Brazil', 'Varies', 'ICMS is state-level, typically 17–20%'],
                ['Canada', '5% GST', 'Provincial sales tax applies on top'],
                ['Australia', '10% GST', 'Broad base, few exemptions']
              ]
            }
          }
        ]
      },
      {
        id: 'invoicing-and-rounding',
        heading: 'Invoicing, rounding and reverse charge',
        blocks: [
          { h: 'Where to round' },
          'Tax rules usually specify whether VAT is calculated per line or on the invoice total, and the two can differ by a unit or two on a long invoice because of rounding. Calculate the way your jurisdiction requires rather than whichever is convenient, and round only at the step the rules name — rounding intermediate figures compounds the drift.',
          { h: 'Reverse charge' },
          'On many cross-border business-to-business supplies within the EU, the supplier invoices with no VAT and the customer accounts for it themselves at their own domestic rate. The arithmetic is unchanged; what changes is who pays it to whom. An invoice under reverse charge shows the net amount and a statement that the reverse charge applies, not a zero rate.',
          { h: 'Inclusive and exclusive quoting' },
          'When you quote a price to a consumer in a VAT jurisdiction, the figure is normally expected to be tax-inclusive. If you have a target amount you want to keep, divide it by the multiplier rather than adding the rate to it: to keep €1,000 net at 23%, quote €1,000 × 1.23 = €1,230, not €1,000 + 23% of €1,230.'
        ]
      }
    ],
    howTo: {
      name: 'How to add VAT to a price',
      steps: [
        { name: 'Enter the net price', text: 'Type the price before tax into the base field.' },
        { name: 'Enter the tax rate', text: 'Type the VAT or sales tax rate as a positive percentage.' },
        { name: 'Read the gross price', text: 'The result is the price including tax; the difference from the net price is the tax itself.' },
        { name: 'To go the other way', text: 'Put the gross price in the result field and the rate in the percentage field, and the calculator solves for the net amount by dividing.' }
      ]
    },
    faq: [
      {
        q: 'How do I remove 20% VAT from a price?',
        a: 'Divide by 1.20. A gross price of £120 has a net price of 120 ÷ 1.2 = £100 and £20 of VAT.'
      },
      {
        q: 'Why can I not just subtract the VAT rate?',
        a: 'Because the rate was applied to the net price, which is smaller than the gross. Subtracting 20% from the gross removes too much — on £600 it overstates the VAT by £20.'
      },
      {
        q: 'What share of a gross price is tax at 21%?',
        a: '21 ÷ 121 = 17.36% of the total you pay.'
      },
      {
        q: 'What is the VAT fraction?',
        a: 'The share of a gross price that is tax, given by rate ÷ (100 + rate). At 20% it is 1/6, so dividing a gross total by 6 gives the VAT directly.'
      },
      {
        q: 'How do I quote a price that leaves me a specific net amount?',
        a: 'Multiply the net amount you want by the tax multiplier. To keep €1,000 at 23%, quote €1,230 — not €1,000 plus 23% of the final figure.'
      },
      {
        q: 'Is sales tax calculated the same way as VAT?',
        a: 'The arithmetic is identical. The difference is that US prices are usually quoted before tax, so you multiply, while European prices usually already include it, so you divide.'
      }
    ]
  },

  margin: {
    title: 'Profit Margin Calculator',
    lead:
      'Turn cost and revenue into a margin percentage, price backwards from a margin you need to hit, and see why margin and markup are not interchangeable.',
    sections: [
      {
        id: 'margin-formula',
        heading: 'How to calculate profit margin',
        blocks: [
          'Margin expresses profit as a share of revenue:',
          { formula: 'margin = ((revenue − cost) ÷ revenue) × 100' },
          'Selling for 250 something that cost 175 gives a profit of 75, and 75 ÷ 250 = 30% margin. Because the denominator is revenue, margin can never reach 100% — that would mean the item cost nothing.',
          { h: 'Gross, operating and net margin' },
          'The formula is the same at every level; only what counts as "cost" changes. Gross margin subtracts the direct cost of goods. Operating margin also subtracts salaries, rent and other running costs. Net margin subtracts everything, including tax and interest. Comparing a gross margin against a competitor\'s net margin is a meaningless comparison.',
          'Worked through one small business with £400,000 of revenue:',
          {
            table: {
              head: ['Line', 'Amount', 'Margin', 'What it tells you'],
              rows: [
                ['Revenue', '£400,000', '—', 'The top line'],
                ['Cost of goods sold', '£240,000', '—', 'Direct cost of what was sold'],
                ['Gross profit', '£160,000', '40.0%', 'Whether the product itself pays'],
                ['Operating costs', '£108,000', '—', 'Salaries, rent, software, marketing'],
                ['Operating profit', '£52,000', '13.0%', 'Whether the business as run pays'],
                ['Interest and tax', '£18,000', '—', 'Financing and the tax bill'],
                ['Net profit', '£34,000', '8.5%', 'What is actually left']
              ]
            }
          },
          'The three margins answer different questions, and a business can look healthy on one and fail on another. A 40% gross margin with an 8.5% net margin means the product works but the overhead is heavy; the fix is in the operating costs, not in the pricing.'
        ]
      },
      {
        id: 'margin-vs-markup',
        heading: 'Margin is not markup',
        blocks: [
          'Markup measures the same profit against cost rather than revenue:',
          { formula: 'markup = ((revenue − cost) ÷ cost) × 100' },
          'The same 175 cost and 250 price is a 30% margin but a 42.9% markup. Quoting one when you mean the other is a reliable way to underprice, and the gap widens as the numbers grow.',
          {
            table: {
              head: ['Markup', 'Equivalent margin', 'Price multiplier on cost'],
              rows: [
                ['10%', '9.1%', '1.10'],
                ['15%', '13.0%', '1.15'],
                ['20%', '16.7%', '1.20'],
                ['25%', '20.0%', '1.25'],
                ['30%', '23.1%', '1.30'],
                ['33.3%', '25.0%', '1.33'],
                ['40%', '28.6%', '1.40'],
                ['50%', '33.3%', '1.50'],
                ['60%', '37.5%', '1.60'],
                ['75%', '42.9%', '1.75'],
                ['100%', '50.0%', '2.00'],
                ['150%', '60.0%', '2.50'],
                ['200%', '66.7%', '3.00'],
                ['400%', '80.0%', '5.00']
              ]
            }
          },
          'To convert between them:',
          { formula: 'margin = markup ÷ (100 + markup) × 100' },
          { formula: 'markup = margin ÷ (100 − margin) × 100' },
          { note: 'A business that believes it is making a 50% margin while actually applying a 50% markup is making 33.3%. On thin overheads that difference is the whole profit.' }
        ]
      },
      {
        id: 'pricing-from-a-target-margin',
        heading: 'Pricing from a target margin',
        blocks: [
          'The question that matters when setting a price is the reverse one: you know the cost and the margin you need, and you want the price.',
          { formula: 'price = cost ÷ (1 − margin ÷ 100)' },
          'To make a 35% margin on an item costing £52: 52 ÷ 0.65 = £80. The instinct to add 35% to the cost gives £70.20, which is only a 25.9% margin — a shortfall of nearly £10 a unit.',
          'The division form also shows why high margins get expensive fast. Each additional margin point multiplies the price by a larger factor, because the denominator is shrinking:',
          {
            table: {
              head: ['Target margin', 'Divide cost by', 'Price on a £52 cost'],
              rows: [
                ['20%', '0.80', '£65.00'],
                ['30%', '0.70', '£74.29'],
                ['40%', '0.60', '£86.67'],
                ['50%', '0.50', '£104.00'],
                ['60%', '0.40', '£130.00'],
                ['70%', '0.30', '£173.33'],
                ['80%', '0.20', '£260.00'],
                ['90%', '0.10', '£520.00']
              ]
            }
          },
          'Going from a 20% to a 40% margin doubles the profit per unit but only raises the price by a third. Going from 80% to 90% doubles the price. This is why software, where the marginal cost is close to zero, can carry margins that would be impossible in retail — and why a retailer chasing a software-like margin ends up with an unsellable price.',
          { h: 'What a discount does to margin' },
          'A discount comes straight out of the margin, not out of the price proportionally. An item costing £60 sold at £100 carries a 40% margin. Discount it 10% to £90 and the profit drops from £40 to £30 — a 25% cut in profit for a 10% cut in price. The rule of thumb is that the profit falls by the discount divided by the margin, so the thinner the margin, the more damage a small discount does.'
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a profit margin',
      steps: [
        { name: 'Enter the profit', text: 'Type revenue minus cost into the first field.' },
        { name: 'Enter the revenue', text: 'Type the total revenue into the second field.' },
        { name: 'Read the margin', text: 'The result is the profit margin as a percentage of revenue.' },
        { name: 'Convert to markup if needed', text: 'Divide the margin by (100 minus the margin) and multiply by 100 to get the markup on cost.' }
      ]
    },
    faq: [
      {
        q: 'What is the difference between margin and markup?',
        a: 'Margin divides profit by revenue; markup divides the same profit by cost. A 50% markup is only a 33.3% margin.'
      },
      {
        q: 'Can a profit margin be over 100%?',
        a: 'No. Since profit is always less than revenue for a profitable sale, margin approaches but never reaches 100%. Markup has no upper limit.'
      },
      {
        q: 'What is a good profit margin?',
        a: 'It depends entirely on the industry. Grocery retail runs on low single digits, while software can exceed 70%. Compare against peers, not against an absolute number.'
      },
      {
        q: 'How do I price something to hit a 40% margin?',
        a: 'Divide the cost by 0.60. An item costing £30 needs to sell at £50. Adding 40% to the cost gives £42, which is only a 28.6% margin.'
      },
      {
        q: 'How much profit does a 10% discount cost me?',
        a: 'Roughly the discount divided by the margin. On a 40% margin a 10% discount removes a quarter of the profit; on a 20% margin it removes half.'
      },
      {
        q: 'Which margin should I quote to an investor?',
        a: 'Say which one you mean. Gross, operating and net margins can differ by tens of points on the same business, and an unlabelled figure is not comparable to anything.'
      }
    ]
  },

  salary: {
    title: 'Salary Raise Calculator',
    lead:
      'Turn a pay offer into a percentage, or a percentage into a figure. See the difference per month, and what the raise is actually worth once inflation is taken off.',
    sections: [
      {
        id: 'how-a-raise-is-calculated',
        heading: 'How a pay rise is calculated',
        blocks: [
          'A raise is a percentage increase on your current pay, so it is the same arithmetic as any other increase:',
          { formula: 'raise % = ((new pay − current pay) ÷ current pay) × 100' },
          'Pay rising from 48,000 to 51,000 is a raise of 3,000 ÷ 48,000 = 6.25%. Going the other way, applying a known percentage to a known salary:',
          { formula: 'new pay = current pay × (1 + raise ÷ 100)' },
          'The calculator above solves for whichever of the three you leave empty, so the same form answers "what percentage is this offer" and "what would 4% get me".',
          { note: 'The denominator is your current pay, not the new pay. Dividing the increase by the new figure understates every raise — on the example above it would report 5.88% instead of 6.25%.' }
        ]
      },
      {
        id: 'nominal-versus-real',
        heading: 'Nominal versus real: the raise after inflation',
        blocks: [
          'A raise below the inflation rate is a pay cut in everything except the number on the payslip. The correction is not a subtraction — inflation and the raise are both multiplicative, so they divide:',
          { formula: 'real change % = ((1 + raise ÷ 100) ÷ (1 + inflation ÷ 100) − 1) × 100' },
          'A 3% raise in a year when prices rose 4% is (1.03 ÷ 1.04 − 1) × 100 = −0.96%. Subtracting instead would give −1%, which is close enough at these figures but drifts badly at higher rates: a 20% raise against 15% inflation is a real gain of 4.35%, not 5%.',
          {
            table: {
              head: ['Raise', 'Inflation', 'Real change', 'What it means'],
              rows: [
                ['0%', '3%', '−2.91%', 'A freeze is a real cut'],
                ['2%', '4%', '−1.92%', 'Below inflation, worse off'],
                ['3%', '3%', '0.00%', 'Standing still'],
                ['5%', '3%', '+1.94%', 'A genuine improvement'],
                ['6.25%', '4%', '+2.16%', 'The worked example above'],
                ['10%', '8%', '+1.85%', 'Large numbers, small real gain'],
                ['20%', '15%', '+4.35%', 'Subtraction would overstate this']
              ]
            }
          },
          'Enter an inflation figure in the optional field and the calculator reports the real change alongside the nominal one. Whichever inflation measure you use — a national consumer price index, or your own rent and grocery bills — the arithmetic is the same; the choice of figure is a judgement about which basket resembles your spending.'
        ]
      },
      {
        id: 'raises-over-time',
        heading: 'Raises compound',
        blocks: [
          'Annual raises multiply rather than add, which is why a consistent small raise outruns an occasional large one. Three years of 4% is not 12%:',
          { formula: 'total growth = (1 + r₁ ÷ 100) × (1 + r₂ ÷ 100) × (1 + r₃ ÷ 100)' },
          '1.04³ = 1.1249, so three years of 4% is 12.49% overall. On a 50,000 salary that is 6,245 rather than 6,000 — the extra 245 is the raise applied to previous raises.',
          {
            table: {
              head: ['Annual raise', 'After 3 years', 'After 5 years', 'After 10 years'],
              rows: [
                ['2%', '+6.1%', '+10.4%', '+21.9%'],
                ['3%', '+9.3%', '+15.9%', '+34.4%'],
                ['4%', '+12.5%', '+21.7%', '+48.0%'],
                ['5%', '+15.8%', '+27.6%', '+62.9%'],
                ['7%', '+22.5%', '+40.3%', '+96.7%'],
                ['10%', '+33.1%', '+61.1%', '+159.4%']
              ]
            }
          },
          'The ten-year column is the argument for negotiating the percentage rather than the one-off amount: the gap between 3% and 5% a year is 28 percentage points of salary after a decade, and every future raise is calculated on the higher base.',
          { h: 'Working back from a target' },
          'To find the raise needed to reach a target salary, divide the target by your current pay and subtract one. Reaching 60,000 from 52,000 needs 60,000 ÷ 52,000 = 1.1538, a 15.38% raise. Spread over three years that is the cube root of 1.1538, or about 4.89% a year.'
        ]
      },
      {
        id: 'raise-in-practice',
        heading: 'Reading an offer properly',
        blocks: [
          { h: 'Gross, not net' },
          'A raise is quoted on gross pay, and the take-home increase is smaller because tax is deducted from it — and, under a progressive system, part of the raise may fall into a higher band. A 6% gross raise typically lands as something between 3.5% and 5% in the bank, depending on jurisdiction and income.',
          { h: 'Total compensation, not just salary' },
          'Pension contributions, bonuses, healthcare and equity are all percentages of something. A 2% salary raise alongside a pension contribution rising from 5% to 8% is a larger change to your total package than the headline suggests.',
          { h: 'Promotion versus cost-of-living' },
          'A cost-of-living adjustment keeps you level with inflation and is not a reward; a merit or promotion raise is the part above it. Reading a 4% adjustment in a 4% inflation year as a promotion is the most common misreading of a payslip.',
          { h: 'Per hour, per month, per year' },
          'The percentage is identical at every period, so a 6.25% raise is 6.25% whether you look at it annually or hourly. The calculator shows the monthly equivalent because the monthly figure is usually the one that decides whether a raise changes anything day to day.'
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a pay rise',
      steps: [
        { name: 'Enter your current pay', text: 'Type your current salary into the first field, annually or monthly — the percentage is the same either way.' },
        { name: 'Enter the new pay or the percentage', text: 'Fill in whichever of the two you know, and the calculator solves for the other.' },
        { name: 'Add inflation if you want the real figure', text: 'Type an inflation rate into the optional field to see what the raise is worth after prices are accounted for.' },
        { name: 'Read the monthly difference', text: 'The result panel shows the cash increase and the monthly equivalent alongside the percentage.' }
      ]
    },
    faq: [
      {
        q: 'How do I calculate my raise as a percentage?',
        a: 'Subtract your old pay from your new pay, divide by the old pay, and multiply by 100. From 48,000 to 51,000 is 3,000 ÷ 48,000 = 6.25%.'
      },
      {
        q: 'Is a 3% raise good when inflation is 4%?',
        a: 'No. In real terms it is a cut of about 0.96%, because prices rose faster than your pay. You would need 4% simply to stand still.'
      },
      {
        q: 'Why is the real raise not just the raise minus inflation?',
        a: 'Because both are multiplicative. The correct form divides 1 plus the raise by 1 plus inflation. At low rates the subtraction is close, but at 20% against 15% it overstates the gain by two thirds of a point.'
      },
      {
        q: 'Do three years of 4% raises add up to 12%?',
        a: 'No, they compound to 12.49%, because each year\'s raise applies to a salary that already includes the previous ones.'
      },
      {
        q: 'What raise do I need to reach a specific salary?',
        a: 'Divide the target by your current pay, subtract 1 and multiply by 100. From 52,000 to 60,000 needs a 15.38% raise.'
      },
      {
        q: 'Will I see the full percentage in my take-home pay?',
        a: 'No. The raise is on gross pay, so tax and contributions come out of it, and part of the increase may be taxed at a higher band than the rest of your salary.'
      }
    ]
  },

  points: {
    title: 'Percentage Points Calculator',
    lead:
      'Compare two percentages and see every honest way of describing the gap between them — the percentage-point difference, the relative change and the percentage difference — each under its own name.',
    sections: [
      {
        id: 'the-three-answers',
        heading: 'Three correct answers to one question',
        blocks: [
          'Ask how far apart 4% and 5% are and there are three defensible answers, all arithmetically correct and all describing something different. The confusion is not in the maths; it is in the naming.',
          { h: '1. The percentage-point difference' },
          { formula: 'points = second − first' },
          'A raw subtraction: 5 − 4 = 1 percentage point. This is the right measure when the two percentages are shares of the same total, such as an unemployment rate or a party\'s vote share, because the gap is itself meaningful in the original units.',
          { h: '2. The relative change' },
          { formula: 'relative change = ((second − first) ÷ first) × 100' },
          '(5 − 4) ÷ 4 = 25%. This is the right measure when one figure came from the other — a rate that rose, a conversion that improved — because it says how much bigger the second is than the first.',
          { h: '3. The percentage difference' },
          { formula: 'percentage difference = |second − first| ÷ ((first + second) ÷ 2) × 100' },
          '1 ÷ 4.5 = 22.2%. This one is symmetric: it gives the same answer whichever number you put first, because it divides by the average rather than by one of them. Use it when neither figure is the baseline — two independent measurements, two competing products — and the direction is arbitrary.',
          { note: 'The three answers to "4% versus 5%" are 1 point, 25% and 22.2%. Anyone reporting one of them as "the difference" without saying which has left out the part that makes it interpretable.' }
        ]
      },
      {
        id: 'why-it-matters',
        heading: 'Where the confusion does damage',
        blocks: [
          { h: 'Interest rates' },
          'A mortgage rate moving from 4% to 5% is one percentage point, but your interest bill rises by 25%. A headline saying rates rose 1% and one saying they rose 25% can describe exactly the same change, and only the first is using the conventional meaning.',
          { h: 'Polling' },
          'A candidate going from 40% to 44% has gained four points and about 10% of their previous support. Polls quote points because the margin of error is also in points — a "3-point lead with a 3-point margin of error" is a statement about points, and converting it to a relative change makes it uninterpretable.',
          { h: 'Conversion and click-through rates' },
          'This is where the two get mixed most often, and usually in the flattering direction. A conversion rate improving from 2% to 2.5% is half a percentage point — and a 25% improvement. Both are true; only the second gets put in the deck.',
          { h: 'Tax rates and margins' },
          'A tax rate rising from 20% to 22% is two points. A business margin falling from 12% to 9% is three points, and a quarter of the margin. When both numbers are already percentages, the word "percent" on its own is ambiguous, which is exactly why the phrase "percentage point" exists.',
          {
            table: {
              head: ['Change', 'In points', 'Relative change', 'Percentage difference'],
              rows: [
                ['4% → 5%', '+1 pp', '+25.0%', '22.2%'],
                ['2% → 2.5%', '+0.5 pp', '+25.0%', '22.2%'],
                ['40% → 44%', '+4 pp', '+10.0%', '9.5%'],
                ['12% → 9%', '−3 pp', '−25.0%', '28.6%'],
                ['50% → 75%', '+25 pp', '+50.0%', '40.0%'],
                ['1% → 2%', '+1 pp', '+100.0%', '66.7%'],
                ['80% → 85%', '+5 pp', '+6.3%', '6.1%']
              ]
            }
          },
          'The second and sixth rows are the ones to remember. A half-point move and a one-point move can both be "a 25% increase" or "a doubling" depending only on where they started, which is why the relative figure alone never tells you how big the change actually was.'
        ]
      },
      {
        id: 'choosing-the-right-one',
        heading: 'Choosing which to report',
        blocks: [
          'A short test that settles most cases: ask whether the first number is a baseline that the second came from, or whether the two are simply being compared.',
          {
            ul: [
              'The second figure came from the first, over time — report the relative change, and give the points as well if the reader needs the scale.',
              'The two figures are shares of the same whole at the same moment — report percentage points.',
              'Neither figure is privileged and the order is arbitrary — report the percentage difference, which is symmetric.',
              'You are writing for a general audience — give both the points and the relative change. They are cheap to state together and impossible to reconstruct from one another.'
            ]
          },
          { h: 'The reversal test' },
          'If swapping the two numbers should change the answer, you want the relative change, which is asymmetric — 4 to 5 is +25% while 5 to 4 is −20%. If swapping them should not change the answer, you want the percentage difference, which gives 22.2% either way. This one property is usually enough to pick the right measure.',
          { h: 'When the first value is zero' },
          'Relative change is undefined when the starting figure is zero, since it divides by it. A rate going from 0% to 3% is a three-point rise and nothing more can honestly be said about it in relative terms. The calculator reports the relative change as undefined rather than showing an infinity, because the honest answer is that the question has no numeric answer.'
        ]
      }
    ],
    howTo: {
      name: 'How to compare two percentages',
      steps: [
        { name: 'Enter the starting percentage', text: 'Type the earlier or baseline figure into the first field, without the percent sign.' },
        { name: 'Enter the second percentage', text: 'Type the later or comparison figure into the second field.' },
        { name: 'Read all three measures', text: 'The panel shows the percentage-point gap, the relative change and the symmetric percentage difference, each labelled.' },
        { name: 'Pick the one that fits', text: 'Use points for shares of the same whole, relative change for a figure that moved over time, and percentage difference when neither value is the baseline.' }
      ]
    },
    faq: [
      {
        q: 'What is the difference between a percent and a percentage point?',
        a: 'A percentage point is the raw gap between two percentages; a percent is that gap relative to the starting value. A rate moving from 4% to 5% rose one percentage point and 25 percent.'
      },
      {
        q: 'How do I calculate percentage points?',
        a: 'Subtract one percentage from the other. There is no division involved, which is what makes the measure a "point" rather than a percentage.'
      },
      {
        q: 'What is percentage difference, as opposed to percentage change?',
        a: 'Percentage difference divides the gap by the average of the two values, so it is symmetric. Percentage change divides by the first value, so reversing the order changes the answer.'
      },
      {
        q: 'Why is 4% to 5% a 25% increase?',
        a: 'Because the increase of one point is measured against the starting value of four: 1 ÷ 4 = 0.25. The same one-point rise from 40% to 41% is only a 2.5% increase.'
      },
      {
        q: 'What happens when the first percentage is zero?',
        a: 'The relative change is undefined, because it would divide by zero. Only the percentage-point difference can be reported.'
      },
      {
        q: 'Which measure should a news article use?',
        a: 'Both, ideally. Points give the scale of the move and the relative change gives its significance, and neither can be worked out from the other without knowing the starting value.'
      }
    ]
  },

  formulas: {
    title: 'Percentage Formulas',
    lead:
      'Every percentage formula worth memorising, each with its inverse and a worked example you can check line by line. One page to bookmark instead of eight.',
    sections: [
      {
        id: 'the-core-four',
        heading: 'The four you will use most',
        blocks: [
          'Almost every percentage question in ordinary life is one of these four, or an inverse of one. They all come from the same definition: a percentage is a fraction over 100.',
          { h: '1. A percentage of a number' },
          { formula: 'part = whole × (percent ÷ 100)' },
          '18% of 250: 250 × 0.18 = 45. Inverses: whole = part ÷ (percent ÷ 100), and percent = (part ÷ whole) × 100.',
          { h: '2. One number as a percentage of another' },
          { formula: 'percent = (part ÷ whole) × 100' },
          '34 out of 40: (34 ÷ 40) × 100 = 85%. The number you are measuring goes on top; the total goes underneath. Reversing them gives 117.6%, which is the answer to a different question.',
          { h: '3. Increase or decrease by a percentage' },
          { formula: 'result = start × (1 ± percent ÷ 100)' },
          '£640 plus 12.5%: 640 × 1.125 = £720. Minus 12.5%: 640 × 0.875 = £560. Inverse: start = result ÷ the same multiplier.',
          { h: '4. Percentage change between two numbers' },
          { formula: 'change = ((new − old) ÷ old) × 100' },
          '£640 to £720: (80 ÷ 640) × 100 = +12.5%. Going back from £720 to £640 is −11.1%, not −12.5%, because the denominator changed.'
        ]
      },
      {
        id: 'the-other-four',
        heading: 'Four more that come up regularly',
        blocks: [
          { h: '5. Removing a percentage that is already included' },
          { formula: 'net = gross ÷ (1 + rate ÷ 100)' },
          'Stripping 20% VAT from £300: 300 ÷ 1.20 = £250. Subtracting 20% from £300 gives £240 and is wrong, because the tax was charged on the smaller net figure.',
          { h: '6. Percentage points versus relative change' },
          { formula: 'points = second − first' },
          { formula: 'relative change = ((second − first) ÷ first) × 100' },
          '4% to 5% is one percentage point and a 25% relative change. When both quantities are already percentages, saying which of the two you mean is not optional.',
          { h: '7. Compound growth over several periods' },
          { formula: 'total factor = (1 + rate ÷ 100)ⁿ' },
          '5% a year for three years is 1.05³ = 1.1576, or 15.76% overall, not 15%. To find the annual rate from a total, take the nth root: growing 40% over five years is 1.40^(1/5) = 1.0696, about 6.96% a year.',
          { h: '8. Margin and markup' },
          { formula: 'margin = ((price − cost) ÷ price) × 100' },
          { formula: 'markup = ((price − cost) ÷ cost) × 100' },
          'Same profit, different denominator. A £52 cost sold at £80 is a 35% margin and a 53.8% markup.'
        ]
      },
      {
        id: 'inverses-at-a-glance',
        heading: 'Every formula and its inverse',
        blocks: [
          'The most common source of a wrong answer is not the formula but its direction — reaching for an addition where the situation calls for a division. This table pairs each operation with the one that undoes it.',
          {
            table: {
              head: ['You know', 'You want', 'Formula', 'Example'],
              rows: [
                ['Whole and percent', 'The part', 'whole × (pct ÷ 100)', '18% of 250 = 45'],
                ['Part and percent', 'The whole', 'part ÷ (pct ÷ 100)', '45 is 18% of 250'],
                ['Part and whole', 'The percent', '(part ÷ whole) × 100', '45 of 250 = 18%'],
                ['Start and increase', 'The result', 'start × (1 + pct ÷ 100)', '250 + 18% = 295'],
                ['Result and increase', 'The start', 'result ÷ (1 + pct ÷ 100)', '295 ÷ 1.18 = 250'],
                ['Start and decrease', 'The result', 'start × (1 − pct ÷ 100)', '250 − 18% = 205'],
                ['Result and decrease', 'The start', 'result ÷ (1 − pct ÷ 100)', '205 ÷ 0.82 = 250'],
                ['Old and new', 'The change', '((new − old) ÷ old) × 100', '250 → 295 = +18%'],
                ['Gross and rate', 'The net', 'gross ÷ (1 + rate ÷ 100)', '300 ÷ 1.20 = 250'],
                ['Gross and rate', 'The tax', 'gross × rate ÷ (100 + rate)', '300 × 20 ÷ 120 = 50'],
                ['Cost and margin', 'The price', 'cost ÷ (1 − margin ÷ 100)', '52 ÷ 0.65 = 80'],
                ['Cost and markup', 'The price', 'cost × (1 + markup ÷ 100)', '52 × 1.538 = 80'],
                ['Markup', 'The margin', 'markup ÷ (100 + markup) × 100', '50% markup = 33.3% margin'],
                ['Margin', 'The markup', 'margin ÷ (100 − margin) × 100', '33.3% margin = 50% markup'],
                ['Rate and periods', 'Total growth', '(1 + rate ÷ 100)ⁿ − 1', '1.05³ − 1 = 15.76%'],
                ['Total growth and periods', 'Annual rate', '(1 + total)^(1÷n) − 1', '1.40^0.2 − 1 = 6.96%'],
                ['A drop of p%', 'The gain to recover', 'p ÷ (100 − p) × 100', 'A 50% drop needs +100%']
              ]
            }
          }
        ]
      },
      {
        id: 'reading-a-formula',
        heading: 'Two habits that prevent most errors',
        blocks: [
          { h: 'Name the base out loud' },
          'Every percentage is a percentage of something. Before writing anything down, say which number the percentage is being taken of. Most wrong answers are the right formula applied to the wrong base — a discount taken from the post-tax total, a raise divided by the new salary, a tax rate subtracted from a gross price.',
          { h: 'Prefer multipliers to two-step arithmetic' },
          'Working with 1.18 and 0.82 rather than "add 18%" and "subtract 18%" makes the inverse obvious, makes chains of changes a single product, and removes the temptation to undo a change by applying it in reverse. Once you are thinking in multipliers, the fact that 1.18 × 0.82 = 0.9676 rather than 1 stops being surprising.',
          { formula: '250 × 1.18 × 0.82 = 241.90, not 250' }
        ]
      }
    ],
    faq: [
      {
        q: 'What is the basic percentage formula?',
        a: 'part = whole × (percent ÷ 100). Everything else on this page is that identity rearranged for a different unknown.'
      },
      {
        q: 'How do I reverse a percentage increase?',
        a: 'Divide by the multiplier you would have multiplied by. To undo a 25% increase, divide by 1.25 — subtracting 25% leaves you 6.25% short.'
      },
      {
        q: 'What is the formula for percentage change?',
        a: '((new − old) ÷ old) × 100. The old value is always the denominator, which is why the same absolute move gives different percentages in each direction.'
      },
      {
        q: 'How do I calculate compound growth?',
        a: 'Raise the multiplier to the power of the number of periods: (1 + rate ÷ 100)ⁿ. Three years at 5% is 1.05³ = 1.1576, or 15.76% in total.'
      },
      {
        q: 'How do I get the tax out of a price that includes it?',
        a: 'Multiply the gross by rate ÷ (100 + rate). At 20% that is 1/6 of the gross, so a £300 price contains £50 of tax.'
      },
      {
        q: 'What gain undoes a 40% loss?',
        a: 'A gain of 40 ÷ 60 × 100 = 66.7%. The general form is p ÷ (100 − p) × 100.'
      }
    ]
  },

  mentalmath: {
    title: 'Percentages in Your Head',
    lead:
      'The handful of tricks that cover almost every percentage you meet away from a keyboard — tips, discounts, tax and quick sanity checks — with the reasoning behind each one.',
    sections: [
      {
        id: 'the-ten-percent-anchor',
        heading: 'Start from 10%',
        blocks: [
          'Nearly all mental percentage work is built on one move: 10% of any number is that number with the decimal point shifted one place left. 10% of 86 is 8.6; 10% of 1,240 is 124. There is no arithmetic to do, only a point to move.',
          'Everything else is scaling that one figure up or down:',
          {
            table: {
              head: ['You want', 'From 10%', 'On 86'],
              rows: [
                ['1%', 'Move the point again', '0.86'],
                ['5%', 'Halve it', '4.30'],
                ['15%', 'Add half of it', '12.90'],
                ['20%', 'Double it', '17.20'],
                ['25%', 'Double it, add half', '21.50'],
                ['30%', 'Triple it', '25.80'],
                ['40%', 'Quadruple it', '34.40'],
                ['45%', 'Quadruple it, add half', '38.70'],
                ['70%', 'Multiply by 7', '60.20'],
                ['90%', 'Subtract it from the total', '77.40']
              ]
            }
          },
          'The last row is worth its own note: for high percentages, take the small complement and subtract. 90% of 86 is easier as 86 − 8.6 than as nine lots of 8.6, and 95% is 86 minus 4.30.'
        ]
      },
      {
        id: 'the-reversal-trick',
        heading: 'The reversal trick',
        blocks: [
          'X% of Y always equals Y% of X. This falls straight out of the formula — both are (X × Y) ÷ 100 — but it is not obvious until someone points it out, and it turns awkward problems into easy ones.',
          { formula: 'X% of Y = Y% of X' },
          '4% of 75 looks like work. Flipped, it is 75% of 4, which is 3. Similarly 12% of 50 becomes 50% of 12, which is 6; and 16% of 25 becomes 25% of 16, which is 4.',
          { note: 'The trick pays off whenever one of the two numbers is a friendly percentage — 25, 50, 75 — or when one is much smaller than the other. Scan both directions before starting.' },
          'It also works as a sanity check. If you calculate 20% of 150 as 30, the reversal says 150% of 20 should also be 30. It is: 20 plus half of 20 again.'
        ]
      },
      {
        id: 'benchmark-fractions',
        heading: 'Benchmark fractions',
        blocks: [
          'Some percentages are fractions in disguise, and dividing is faster than multiplying by a decimal.',
          {
            table: {
              head: ['Percentage', 'Is', 'So do this', 'On 240'],
              rows: [
                ['12.5%', '1/8', 'Halve three times', '30'],
                ['16.7%', '1/6', 'Divide by 6', '40'],
                ['20%', '1/5', 'Divide by 5', '48'],
                ['25%', '1/4', 'Halve twice', '60'],
                ['33.3%', '1/3', 'Divide by 3', '80'],
                ['37.5%', '3/8', 'Divide by 8, times 3', '90'],
                ['62.5%', '5/8', 'Divide by 8, times 5', '150'],
                ['66.7%', '2/3', 'Divide by 3, double', '160'],
                ['75%', '3/4', 'Take a quarter off', '180'],
                ['87.5%', '7/8', 'Take an eighth off', '210']
              ]
            }
          },
          'Halving is the cheapest operation there is, so anything on the eighths line — 12.5%, 37.5%, 62.5%, 87.5% — is faster as repeated halving than as a multiplication. Recognising 37.5% as three eighths turns an unpleasant sum into three halvings and a small multiplication.'
        ]
      },
      {
        id: 'estimating-in-the-shop',
        heading: 'Discounts, tips and tax in practice',
        blocks: [
          { h: 'A discount is what is left, not what comes off' },
          'Reading "35% off £68" as "find 35%, then subtract" is two operations. Reading it as "pay 65%" is one. 65% of 68 is 68 minus a third of 68 minus a fiftieth — or, more practically, 10% is 6.80, so 60% is 40.80 and 5% is 3.40, giving £44.20.',
          { h: 'Round the bill, not the percentage' },
          'For a tip, round the bill to something friendly first and accept the small error. A £57.40 bill is £57 for mental purposes; 10% is £5.70, so 20% is £11.40. The rounding cost you four pence, which is not a number anyone is tracking.',
          { h: 'Tax on a price tag' },
          'To add 20% mentally, add a fifth: £45 becomes £45 + £9 = £54. To take 20% out of a gross price, divide by 6 to get the tax: £54 ÷ 6 = £9, leaving £45. The "divide by 6" shortcut works only at 20%, but the equivalent exists at every rate — it is rate ÷ (100 + rate).',
          { h: 'Sanity-check with a bracket' },
          'Before trusting any percentage, bracket it between two easy ones. If you need 43% of 380, note that 40% is 152 and 50% is 190, so the answer must sit between them and nearer the bottom. Getting 163.4 is plausible; getting 16.34 or 234 is not, and the bracket catches a misplaced decimal point instantly.'
        ]
      },
      {
        id: 'compounding-shortcuts',
        heading: 'Two rules for growth',
        blocks: [
          { h: 'The rule of 72' },
          'Divide 72 by an annual growth rate to get roughly the number of years for something to double. At 6% a year, 72 ÷ 6 = 12 years. At 3%, 24 years. It is an approximation that holds well between about 4% and 12%, and it turns compound interest from a calculation into a fact you can state in conversation.',
          { h: 'Small percentages roughly add' },
          'For changes under about 10%, chaining them is close to adding them: a 3% rise followed by a 4% rise is 7.12%, near enough to 7% for a mental estimate. Above 10% the approximation breaks down and you have to multiply — a 30% rise followed by a 40% rise is 82%, not 70%, and the gap only widens from there.'
        ]
      }
    ],
    faq: [
      {
        q: 'What is the fastest way to work out a percentage in my head?',
        a: 'Find 10% by moving the decimal point one place left, then scale it. Halve it for 5%, double it for 20%, add half of it for 15%.'
      },
      {
        q: 'Why does X% of Y equal Y% of X?',
        a: 'Both work out to (X × Y) ÷ 100, so the order does not matter. It means 4% of 75 can be read as 75% of 4, which is 3.'
      },
      {
        q: 'How do I calculate a 15% tip quickly?',
        a: 'Take 10% of the bill, halve it for 5%, and add the two together. On a £64 bill: £6.40 + £3.20 = £9.60.'
      },
      {
        q: 'What is the rule of 72?',
        a: 'Dividing 72 by a growth rate gives roughly the years needed to double. At 6% a year, something doubles in about 12 years.'
      },
      {
        q: 'How do I take 20% VAT out of a price in my head?',
        a: 'Divide the gross price by 6 to get the tax. £54 ÷ 6 = £9, leaving £45 net.'
      },
      {
        q: 'Can I just add two percentage changes together?',
        a: 'Only for small ones. Under about 10% the error is negligible; a 30% and a 40% rise compound to 82%, not 70%.'
      }
    ]
  },

  mistakes: {
    title: 'Common Percentage Mistakes',
    lead:
      'Six percentage errors that change real decisions, each with the wrong answer, the right answer, and the reason the intuition fails.',
    sections: [
      {
        id: 'points-versus-percent',
        heading: '1. Confusing percentage points with percent',
        blocks: [
          'When both quantities are already percentages, "rose by 5%" has two possible meanings and they can differ by an order of magnitude.',
          'An interest rate goes from 4% to 5%. That is a rise of one percentage point, and a rise of 25 percent. A conversion rate improving from 2% to 2.5% is half a percentage point, and also a 25% improvement. Both statements about each pair are true; neither is complete on its own.',
          { note: 'The convention: use "percentage points" for the subtraction, and "percent" for the relative change. If a source does not say which it means, you cannot recover the answer without the starting value.' },
          'The consequence is not academic. A fund quoting "fees of 1%" against a benchmark of 0.5% is charging one hundred percent more, and a report of a "2% rise in unemployment" could mean 5% became 7% or 5% became 5.1%.'
        ]
      },
      {
        id: 'non-reversible-changes',
        heading: '2. Assuming a percentage change reverses itself',
        blocks: [
          'Adding a percentage and then removing the same percentage does not return you to where you started, because the second operation applies to a different, larger or smaller number.',
          { formula: '100 × 1.20 × 0.80 = 96, not 100' },
          'The loss version is the one that matters financially. A holding that falls 50% needs to double — a 100% gain — to recover, because the gain is calculated on the reduced value.',
          { formula: 'gain needed = p ÷ (100 − p) × 100' },
          {
            table: {
              head: ['Fall of', 'Leaves you at', 'Gain needed to recover'],
              rows: [
                ['10%', '90%', '11.1%'],
                ['20%', '80%', '25.0%'],
                ['30%', '70%', '42.9%'],
                ['40%', '60%', '66.7%'],
                ['50%', '50%', '100.0%'],
                ['60%', '40%', '150.0%'],
                ['75%', '25%', '300.0%'],
                ['90%', '10%', '900.0%']
              ]
            }
          },
          'The asymmetry is why a run of alternating gains and losses of the same percentage always ends below where it began, no matter the order.'
        ]
      },
      {
        id: 'averaging-percentages',
        heading: '3. Averaging percentages without weighting them',
        blocks: [
          'Two percentages can only be averaged directly if they describe groups of the same size. Otherwise the plain average is wrong, sometimes wildly.',
          'A class of 10 has a 90% pass rate; a class of 100 has a 50% pass rate. The plain average is 70%. The actual pass rate is (9 + 50) ÷ 110 = 53.6%, because the larger group dominates.',
          { formula: 'weighted average = Σ(percentage × group size) ÷ Σ(group size)' },
          'The reliable fix is to avoid percentages entirely until the end: add up the raw counts, add up the totals, and divide once. This is the same reason a batting average across a season is not the average of the monthly averages, and why a company\'s overall margin is not the average of its product margins.',
          { h: 'The same trap in growth rates' },
          'Averaging annual growth rates arithmetically overstates the real result. Growing 50% one year and falling 50% the next averages to 0%, but leaves you at 75% of where you started. The correct average for rates that compound is the geometric mean: √(1.50 × 0.50) = 0.866, or −13.4% a year.'
        ]
      },
      {
        id: 'wrong-base',
        heading: '4. Taking the percentage of the wrong number',
        blocks: [
          'This is the most common error of all, and the hardest to spot afterwards because the arithmetic itself is correct — it was just applied to the wrong figure.',
          {
            table: {
              head: ['Situation', 'The tempting base', 'The correct base'],
              rows: [
                ['Undoing a 20% discount', 'The sale price', 'The sale price, but divided not added'],
                ['A pay rise percentage', 'The new salary', 'The old salary'],
                ['Removing VAT from a total', 'The gross price', 'The net price the rate was charged on'],
                ['A margin on a sale', 'The cost', 'The revenue'],
                ['Percentage change over time', 'The later value', 'The earlier value'],
                ['A tip on a bill', 'The total with service charge', 'The food and drink subtotal']
              ]
            }
          },
          'Every row is the same mistake: the percentage was originally taken of one number, and the reverse calculation is being applied to another. Saying the base out loud before starting — "twenty percent of what, exactly" — catches all six.'
        ]
      },
      {
        id: 'percentage-of-percentage',
        heading: '5. Taking a percentage of a percentage',
        blocks: [
          'When a percentage is applied to something that is already a percentage, the result is a much smaller number than it looks.',
          'A political party polling at 30% loses 10% of its support. It is now on 27%, not 20% — the 10% was of the 30, not of the electorate. Three percentage points went, not ten.',
          { formula: '30% × (1 − 10 ÷ 100) = 27%' },
          'The same applies to commissions on commissions, discounts on already-discounted goods, and a tax charged on a bill that includes a service charge. Each layer multiplies, and the multiplication always produces less than the addition would suggest.',
          { h: 'The special case of a doubled percentage' },
          'Going from 30% to 60% is a 100% increase but only 30 percentage points. Both are correct, and which one to state depends on whether the reader needs the scale or the significance. Stating only one is where most misleading charts come from.'
        ]
      },
      {
        id: 'percentiles-and-rates',
        heading: '6. Reading a percentile as a percentage',
        blocks: [
          'A percentile is a rank, not a share. Scoring in the 90th percentile means 90% of people scored lower — it says nothing about how many questions were answered correctly. A student can be in the 90th percentile with 55% of the marks.',
          'The same confusion appears in growth statistics. "The top 10% of earners" is a percentile group; "10% of earnings" is a share. A headline combining them — "the top 10% take 40%" — is comparing a rank to a share, and only makes sense because both are stated explicitly.',
          { h: 'And rates that are not out of 100' },
          'Some figures that look like percentages are not shares of anything: a crime rate per 100,000, an interest rate per year, an error rate per million. Treating them as percentages of a total, or averaging them across populations of different sizes, produces numbers that are not wrong so much as meaningless.',
          { note: 'A quick test for any percentage: name the whole. If you cannot say what the figure is a percentage of, it is not yet a percentage — it is a number with a symbol after it.' }
        ]
      }
    ],
    faq: [
      {
        q: 'Why does a 50% loss need a 100% gain to recover?',
        a: 'Because the gain is calculated on the reduced value. 100 falling by half leaves 50, and getting from 50 back to 100 means doubling.'
      },
      {
        q: 'Can I average two percentages together?',
        a: 'Only when they describe groups of the same size. Otherwise weight each by its group size, or work from the raw counts and divide once at the end.'
      },
      {
        q: 'If a party polling at 30% loses 10% of its support, where is it now?',
        a: 'On 27%. The 10% applies to the 30, not to the whole electorate, so three percentage points were lost.'
      },
      {
        q: 'What is the most common percentage mistake?',
        a: 'Applying the right formula to the wrong base — dividing a raise by the new salary, subtracting VAT from a gross price, or taking a margin against cost instead of revenue.'
      },
      {
        q: 'Does adding 20% and then subtracting 20% get me back to the start?',
        a: 'No. 100 × 1.2 × 0.8 = 96. The second percentage is applied to a larger number than the first was.'
      },
      {
        q: 'Is the 90th percentile the same as 90%?',
        a: 'No. A percentile is a rank against other people; a percentage is a share of a total. You can be in the 90th percentile with a score of 55%.'
      }
    ]
  },

  faq: {
    title: 'Frequently Asked Questions',
    lead: 'How the calculator behaves, what to do when a result looks wrong, and how the site itself works.',
    sections: [
      {
        id: 'about-the-tool',
        heading: 'Using the calculator',
        blocks: [
          'The calculator solves for whichever field you leave empty. Fill in any two of base, percentage and result, and the third appears as you type — there is no button to press.',
          'The field the calculator worked out is drawn with a dashed border and a shaded background, so at a glance you can tell which numbers you supplied and which one was derived. Type into that field and the calculator switches to solving for one of the others, using the two most recent values you touched.',
          'Under the answer, the panel lists the arithmetic in order using your own numbers. That section is there so you can check the result rather than trust it, and so the site is useful to someone learning the method rather than only to someone who wants the total.',
          { h: 'When a field stops updating' },
          'The calculator always keeps the two fields you edited most recently and solves for the third. If it seems to be solving for the wrong field, clear everything and enter the two you know in the order you know them.',
          { h: 'What it will not do' },
          'Some combinations have no answer, and the calculator leaves the field blank rather than inventing one. A percentage change from zero is undefined, since it would divide by zero, and so is asking what percentage a number is of nothing.'
        ]
      },
      {
        id: 'about-the-numbers',
        heading: 'Accuracy and rounding',
        blocks: [
          'Results are shown to two decimal places, with a trailing ".00" removed. The intermediate figures in the step-by-step working are shown to more places, because rounding them to two would make the lines look inconsistent with the answer.',
          'Underneath, the arithmetic uses ordinary double-precision floating point, the same as every spreadsheet and browser. That is exact for the sizes of number this site deals with, with the well-known caveat that a few decimal fractions cannot be represented precisely in binary.',
          'For accounting or invoicing, round explicitly at the step your own rules require rather than relying on the displayed figure. The methodology page sets out the rounding behaviour in full.'
        ]
      },
      {
        id: 'about-the-site',
        heading: 'About the site itself',
        blocks: [
          'Every page is a static HTML file served from a CDN. The calculator is JavaScript that takes over once the page has loaded, which is why the explanations are readable before any script runs, and why the tool keeps working if the connection drops afterwards.',
          'Nothing you type is transmitted. There is no server to receive it, no account system and no stored history of your calculations.'
        ]
      }
    ],
    faq: [
      {
        q: 'Which two fields should I fill in?',
        a: 'Any two. The calculator works out which value is missing and solves for it, so you can use the same form to find a percentage, a part or a total.'
      },
      {
        q: 'How do I switch between calculation types?',
        a: 'Use the tabs above the form: percentage of a number, what percent one number is of another, increase or decrease, and percentage change between two values.'
      },
      {
        q: 'Why is one of my fields greyed out with a dashed border?',
        a: 'That is the field the calculator solved for. Typing into it makes it an input again, and the calculator then solves for whichever field you edited least recently.'
      },
      {
        q: 'Can I enter a negative percentage?',
        a: 'Yes, in the increase/decrease mode, where a negative value means a reduction. The other modes only accept positive percentages, since a negative one has no meaning there.'
      },
      {
        q: 'Can I use commas for decimals?',
        a: 'Yes. Pick your separator in the header. The choice is saved on your device and applies to both input and results.'
      },
      {
        q: 'Does the site work without JavaScript?',
        a: 'The written explanations, tables and answers do, because every page is pre-rendered HTML. The interactive calculator needs JavaScript.'
      },
      {
        q: 'Is the site available in other languages?',
        a: 'The calculator interface is available in English, Portuguese, Spanish, French, German and Italian. The full set of articles exists in English and Portuguese; the other languages currently have the home page and the methodology page, and link through to English for the rest.'
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The layout adapts to small screens and the number fields open a numeric keypad on mobile devices.'
      },
      {
        q: 'Can I share a calculation with someone?',
        a: 'The share button passes the result sentence to your device\'s share menu, or copies it to the clipboard if sharing is unavailable. The text is in whatever language you are reading the site in.'
      },
      {
        q: 'How precise are the results?',
        a: 'Calculations use standard double-precision floating point and results are rounded to two decimal places for display. For accounting work, round explicitly at the step your rules require rather than relying on the displayed value.'
      },
      {
        q: 'How do I report an error?',
        a: `Email ${CONTACT_EMAIL} with the mode you were using, the exact numbers you entered, what you saw and what you expected. Reproducible reports get fixed quickly.`
      },
      {
        q: 'Is the calculator free to use?',
        a: 'Yes, entirely free and with no account required. The site is funded by advertising placed outside the calculator itself.'
      }
    ]
  },

  methodology: {
    title: 'Methodology',
    lead:
      'Which formulas the calculators use, how results are rounded, where the arithmetic has known limits, and how the pages on this site are written and checked.',
    sections: [
      {
        id: 'formulas-used',
        heading: 'The formulas behind each tool',
        blocks: [
          'Nothing on this site uses a proprietary method. Every result comes from standard arithmetic that you can reproduce on paper, and the step-by-step working under each answer shows exactly which operations were applied to your numbers.',
          {
            table: {
              head: ['Tool', 'Formula used'],
              rows: [
                ['Percent of a number', 'base × (percent ÷ 100)'],
                ['What percent X is of Y', '(part ÷ whole) × 100'],
                ['Increase or decrease', 'base × (1 + percent ÷ 100)'],
                ['Percentage change', '((new − old) ÷ old) × 100'],
                ['Discount', 'price × (1 − discount ÷ 100)'],
                ['Tip', 'bill × (percent ÷ 100)'],
                ['VAT, adding', 'net × (1 + rate ÷ 100)'],
                ['VAT, removing', 'gross ÷ (1 + rate ÷ 100)'],
                ['Profit margin', '((revenue − cost) ÷ revenue) × 100'],
                ['Salary raise', '((new − old) ÷ old) × 100'],
                ['Real raise after inflation', '((1 + raise ÷ 100) ÷ (1 + inflation ÷ 100) − 1) × 100'],
                ['Percentage points', 'second − first'],
                ['Relative change', '((second − first) ÷ first) × 100'],
                ['Percentage difference', '|second − first| ÷ ((first + second) ÷ 2) × 100']
              ]
            }
          },
          'Each calculator also solves its formula in reverse when you leave a different field empty. The inverse of a multiplication is a division, not a subtraction, which is the single most consequential thing this site tries to make visible.'
        ]
      },
      {
        id: 'rounding',
        heading: 'Rounding and precision',
        blocks: [
          {
            ul: [
              'Answers are rounded to two decimal places and a trailing ".00" is removed, so 30.00 displays as 30.',
              'Intermediate values in the step-by-step working are shown to up to six decimal places, so that each line is consistent with the next.',
              'Rounding happens only at display time. The arithmetic itself runs on unrounded values, so chained operations do not accumulate display error.',
              'Percentages are not clamped to any range. A result above 100% or below zero is shown as calculated, because both are meaningful in several of these contexts.'
            ]
          },
          { h: 'Floating point' },
          'Calculations use the IEEE 754 double-precision arithmetic built into every browser and spreadsheet. Some decimal fractions cannot be represented exactly in binary, which is why 0.1 + 0.2 famously does not equal 0.3 in almost every programming language. At two decimal places of display this is invisible, but it is a real property of the arithmetic rather than a bug in this site.',
          { h: 'What this means for accounting' },
          'Tax and invoicing rules usually specify where rounding must occur — per line item, per invoice, or per tax rate — and the required answer can differ by a unit from a single rounded calculation. Use the displayed figure as a check, not as the entry, and apply your own jurisdiction\'s rounding rule at the step it names.'
        ]
      },
      {
        id: 'sources-and-data',
        heading: 'Reference data on this site',
        blocks: [
          'Some pages carry reference tables that are not derived arithmetic but observed figures — VAT rates by country, tipping conventions, typical margin ranges. These are compiled from public government and industry sources and are provided as orientation rather than as authority.',
          {
            ul: [
              'Tax rates change, often with little notice, and most jurisdictions operate reduced rates alongside the standard one. Confirm the current rate with the relevant tax authority before invoicing.',
              'Tipping conventions are social rather than legal, vary within a country, and shift over time. The ranges given describe common practice, not a rule.',
              'Nothing on this site is financial, tax, accounting or legal advice. The arithmetic is only one input into decisions that usually depend on rules specific to your circumstances.'
            ]
          }
        ]
      },
      {
        id: 'how-pages-are-written',
        heading: 'How pages are written and checked',
        blocks: [
          'Pages are written by hand rather than generated. Every worked example on the site was calculated and checked against the tool it appears next to, and the numbers in the tables were recomputed rather than copied from elsewhere.',
          'Each page carries a "last reviewed" date at the foot. That date changes when the substance of the page changes — a corrected figure, a rewritten section, a new table — and not for typographical fixes. The same date is published in the page\'s structured data and in the site\'s sitemap, so all three agree.',
          { h: 'Corrections' },
          `If a result or a stated figure is wrong, it gets fixed. Reports go to ${CONTACT_EMAIL}; including the numbers you entered and the answer you expected is usually enough to reproduce the problem the same day. Corrections to substance are made in place and the review date is updated.`,
          { h: 'Translations' },
          'The English and Portuguese versions of each page are written as parallel texts rather than machine-translated, and the worked examples are checked in both. Where a locale does not yet have a page, its links point to the English version rather than to a stub.'
        ]
      }
    ],
    faq: [
      {
        q: 'How are the results rounded?',
        a: 'To two decimal places for display, with trailing zeros removed. The underlying arithmetic is unrounded, so chained calculations do not accumulate display error.'
      },
      {
        q: 'Why does the working show more decimal places than the answer?',
        a: 'So that each line follows from the one before it. Rounding an intermediate value to two places would sometimes make the final multiplication look wrong.'
      },
      {
        q: 'Can I rely on these figures for an invoice?',
        a: 'Use them as a check. Tax rules specify where rounding must occur, and the required entry can differ by a unit from a single rounded calculation.'
      },
      {
        q: 'Where do the VAT rates and tipping customs come from?',
        a: 'Public government and industry sources, compiled for orientation. Rates change and conventions vary, so confirm anything that matters with the relevant authority.'
      },
      {
        q: 'What does the "last reviewed" date mean?',
        a: 'The page was read through and its figures checked on that date. It changes when the substance changes, not for typographical fixes.'
      }
    ]
  },

  about: {
    title: 'About CalcPercentages',
    lead:
      'A small, independent site that does one thing: percentage arithmetic, quickly, with the working shown, and without getting in your way.',
    sections: [
      {
        id: 'what-this-is',
        heading: 'What this site is',
        blocks: [
          'CalcPercentages is an independent project, not a company. It exists because most percentage calculators online bury a simple tool under pop-ups, forced sign-ups and three screens of scrolling before the input fields appear.',
          'The design goal is that the calculator is usable within a second of the page loading, on a phone, on a slow connection. Everything else on the page — the explanations, the reference tables, the worked examples — sits below the tool, where it helps if you want it and stays out of the way if you do not.',
          'The second goal is that the site should be worth reading, not only worth using. Anyone can put four input boxes on a page; the part that takes work is explaining why dividing a gross price by 1.2 is not the same as subtracting 20% from it, and why that distinction costs money on every invoice where it is got wrong.'
        ]
      },
      {
        id: 'what-it-deliberately-does-not-do',
        heading: 'What it deliberately does not do',
        blocks: [
          {
            ul: [
              'No account, no sign-up, no email address required for anything.',
              'No cookie banner beyond the consent message that advertising law requires in the EEA, the UK and Switzerland.',
              'No transmission of the numbers you type. There is no server that could receive them.',
              'No advertising inside or above the calculator itself. Ads sit below the tool, after the content.',
              'No interstitials, no newsletter overlay, no "read the rest" gate.'
            ]
          },
          'These are constraints rather than features, and some of them cost traffic or revenue. They are kept because a calculator you have to fight is not a calculator.'
        ]
      },
      {
        id: 'how-it-works',
        heading: 'How it works',
        blocks: [
          'The site is a static, pre-rendered application. Every page is plain HTML delivered from a CDN, with the interactive calculator taking over once the JavaScript loads. There is no backend and no database.',
          'Calculations happen entirely on your device. Nothing you type is sent anywhere, logged, or stored. The only thing kept between visits is your choice of decimal separator, held in your browser\'s local storage.',
          { h: 'Accuracy' },
          'The formulas used are documented openly on the methodology page and repeated on each calculator, and the tool shows its working with your own numbers so you can check the result rather than trust it. If you find a result that looks wrong, please report it — see the contact page.',
          { h: 'How the content is made' },
          'Pages are written by hand. Worked examples are calculated and checked against the tool they sit next to, and reference tables are recomputed rather than copied. Each page carries the date it was last reviewed.'
        ]
      },
      {
        id: 'how-it-is-funded',
        heading: 'How it is funded',
        blocks: [
          'The site is free and is funded by advertising placed below the calculator and outside the article text. There are no affiliate links, no sponsored content, and nothing on the site is written to sell a product. The reference tables and recommendations are not influenced by any commercial relationship, because there are none.',
          'The privacy policy sets out what the advertising involves and how to opt out of personalised ads.'
        ]
      },
      {
        id: 'other-tools',
        heading: 'Related tools',
        blocks: [
          'The same approach is applied to two sibling calculators built by the same person: a matrix calculator at matrixcalc.net and a working-days calculator at calcworkdays.com. They share the design and the principle — the tool first, the explanation below it — but no data of any kind is shared between the sites.'
        ]
      }
    ]
  },

  contact: {
    title: 'Contact',
    lead: 'Corrections, bug reports, translation fixes and suggestions are all welcome, and errors of substance get fixed quickly.',
    sections: [
      {
        id: 'get-in-touch',
        heading: 'Get in touch',
        blocks: [
          `The fastest way to reach the site is by email: ${CONTACT_EMAIL}`,
          'There is no contact form, because a form would mean storing what you write on a server, and the site does not have one.',
          { h: 'Reporting a wrong result' },
          'Please include four things: the calculation mode you were using, the exact numbers you entered, the result you saw, and the result you expected. That is usually enough to reproduce and fix an issue the same day.',
          'A useful report reads something like: "On the VAT page, increase/decrease mode, I entered 300 as the base and 20 as the percentage. It showed 360, and I expected 250 because I wanted the tax removed rather than added." Half of the reports that arrive turn out to be that particular misunderstanding, and it is worth checking the removing-tax section before writing.',
          { h: 'What is worth reporting' },
          {
            ul: [
              'A result that is arithmetically wrong, with the numbers that produced it.',
              'A figure in a reference table that is out of date — a changed VAT rate, for instance.',
              'A translation that reads awkwardly or uses the wrong term of art in your language.',
              'Anything that does not work with a keyboard or a screen reader.',
              'A page that is slow, broken on your device, or renders badly at your screen size.'
            ]
          }
        ]
      },
      {
        id: 'response-times',
        heading: 'What to expect',
        blocks: [
          'This is a one-person project, not a support desk. Reproducible bug reports are usually acted on within a day or two; feature suggestions and general questions take longer, and not every suggestion gets built. Every message is read.',
          'Feature requests, translation corrections, accessibility problems and advertising enquiries all go to the same address.'
        ]
      },
      {
        id: 'privacy-requests',
        heading: 'Privacy requests',
        blocks: [
          'For questions about data handling, or to exercise a right under the GDPR, LGPD or CCPA, use the same email address and mention which regulation you are writing under. Requests are handled within the statutory period.',
          'It is worth reading the privacy policy first: because the site collects no personal data, most access and deletion requests have nothing to act on, and the answer is usually that there is no record of you to produce.'
        ]
      }
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    lead: 'What this site collects, what it does not, and the third parties involved.',
    sections: [
      {
        id: 'summary',
        heading: 'The short version',
        blocks: [
          'This site does not ask for, collect or store any personal information. The numbers you type into the calculator never leave your device. There is no account system, no newsletter and no contact form storing what you write.',
          'Two things do involve third parties: anonymous traffic analytics, and — once enabled — advertising. Both are described below.'
        ]
      },
      {
        id: 'local-storage',
        heading: 'Data stored on your device',
        blocks: [
          'The site stores two small preferences in your browser\'s local storage so it can remember them between visits:',
          {
            ul: [
              'Your chosen interface language.',
              'Your chosen decimal separator (dot or comma).'
            ]
          },
          'These never leave your browser and are not readable by this site\'s operator. Clearing your browser data removes them.'
        ]
      },
      {
        id: 'analytics',
        heading: 'Analytics',
        blocks: [
          'The site uses Vercel Web Analytics to count page views. It is cookie-free and does not build a profile of you or track you across other websites. It records aggregate information such as the page visited, the referring site, the country, and the browser and device type.',
          'No IP addresses are stored in a form that identifies an individual visitor.'
        ]
      },
      {
        id: 'advertising',
        heading: 'Advertising and cookies',
        blocks: [
          'This site may display advertising served by Google AdSense. When advertising is active, the following applies:',
          {
            ul: [
              'Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.',
              'Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and other sites on the internet.',
              'You can opt out of personalised advertising by visiting Google\'s Ads Settings at adssettings.google.com.',
              'You can opt out of third-party vendor cookies more broadly at aboutads.info/choices or youronlinechoices.eu.',
              'Some third-party vendors may use the DoubleClick DART cookie or similar identifiers, which are governed by their own privacy policies.'
            ]
          },
          'Visitors in the European Economic Area, the United Kingdom and Switzerland are shown a consent message before any personalised advertising cookie is set, and personalised ads are only served where consent has been given.'
        ]
      },
      {
        id: 'your-rights',
        heading: 'Your rights',
        blocks: [
          'Because no personal data is collected or held by this site, there is generally nothing to access, correct or delete. If you believe otherwise, or you want to exercise a right under the GDPR, the LGPD or the CCPA, write to the address on the contact page and it will be handled within the statutory period.',
          { h: 'Children' },
          'This site is not directed at children under 13 and does not knowingly collect information from them.',
          { h: 'External links' },
          'Pages here link to other calculators and to third-party references. Those sites have their own privacy policies, and this one does not cover them.'
        ]
      },
      {
        id: 'changes',
        heading: 'Changes to this policy',
        blocks: [
          'If this policy changes — for example when advertising is switched on — the revised version will be published on this page with a new date at the top. Continuing to use the site after a change means accepting the revised policy.'
        ]
      }
    ]
  },

  terms: {
    title: 'Terms of Use',
    lead: 'The conditions under which this site is made available, and the limits of what it promises.',
    sections: [
      {
        id: 'acceptance',
        heading: 'Acceptance',
        blocks: [
          'By using CalcPercentages you agree to these terms. If you do not agree with them, please do not use the site.',
          'These terms apply to every page on the domain, in every language, and to the calculators themselves. They do not create an account relationship, because there is no account system — using the site is the whole of the arrangement.'
        ]
      },
      {
        id: 'use-of-the-site',
        heading: 'Use of the site',
        blocks: [
          'The calculator and its accompanying explanations are provided free of charge for personal and commercial use. You may use the results in your own work without attribution, and you may quote a formula or a worked figure in your own material.',
          'You may not attempt to disrupt the site, use automated systems to overload it, or present it as your own service.',
          { h: 'What is not permitted' },
          {
            ul: [
              'Republishing the written explanations, reference tables or page structure as your own content.',
              'Framing or embedding the calculator on another site in a way that presents it as that site\'s own tool.',
              'Automated scraping at a rate that degrades the service for other visitors.',
              'Circumventing, obscuring or automatically clicking the advertising that funds the site.',
              'Using the site in a way that breaks the law where you are.'
            ]
          },
          'Using the arithmetic is not restricted, and could not be: mathematical formulas are not owned by anyone. What these terms cover is the writing around them.'
        ]
      },
      {
        id: 'no-warranty',
        heading: 'Accuracy and disclaimer',
        blocks: [
          'Considerable care goes into the formulas and worked examples on this site, but the tool is provided "as is", without warranty of any kind, express or implied, including any implied warranty of fitness for a particular purpose.',
          'Nothing here is financial, tax, accounting or legal advice. Percentage arithmetic is only one input into decisions that usually depend on rules specific to your jurisdiction and circumstances. Verify any result that matters before relying on it, and consult a qualified professional where appropriate.',
          { h: 'Reference data in particular' },
          'Some pages carry observed figures rather than derived arithmetic — tax rates by country, tipping conventions, typical margin ranges. Rates change, often at short notice, and conventions vary within a country. Those tables are orientation, not authority, and should be confirmed against the relevant official source before being acted on. The methodology page sets out where they come from.',
          'To the fullest extent permitted by law, the operator of this site accepts no liability for any loss arising from use of, or reliance on, the site or its content.'
        ]
      },
      {
        id: 'availability',
        heading: 'Availability and changes',
        blocks: [
          'The site is offered without any guarantee of uptime. Features, content and these terms may change at any time without notice, and pages may be added, rewritten or removed.',
          'Where a change to these terms is substantive, the revised version is published on this page and the review date at the foot of the page is updated. Continuing to use the site after a change means accepting the revised terms.'
        ]
      },
      {
        id: 'advertising-and-links',
        heading: 'Advertising and external links',
        blocks: [
          'The site is free and is funded by advertising placed outside the calculator. Advertisements are served by third parties and their content is not selected, endorsed or verified by this site. What the advertising involves for your data, and how to opt out of personalised ads, is set out in the privacy policy.',
          'Pages here link to other calculators and to third-party references. Those sites have their own terms and privacy policies, and this one does not cover them. A link is not an endorsement of the linked site\'s content, accuracy or commercial practices.'
        ]
      },
      {
        id: 'intellectual-property',
        heading: 'Intellectual property',
        blocks: [
          'The written explanations, reference tables, worked examples and design of this site belong to its operator. Mathematical formulas themselves are not owned by anyone; you are free to use them, and to reproduce a short quotation with attribution.',
          'If you believe something on this site infringes your rights, write to the address below with enough detail to identify the material, and it will be reviewed.'
        ]
      },
      {
        id: 'contact-terms',
        heading: 'Questions',
        blocks: [
          `Questions about these terms can be sent to ${CONTACT_EMAIL}. Corrections to the content itself are welcome at the same address and are usually acted on quickly — see the contact page for what makes a report easy to reproduce.`
        ]
      }
    ]
  }
};

import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Percentage Calculator',
    lead:
      'Work out any percentage in one step. Fill in any two fields and the third is calculated instantly — no sign-up, no ads inside the tool, and it works offline once the page has loaded.',
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
          'A 90% pass rate on a class of 10 and a 50% pass rate on a class of 100 do not average to 70%. Weight each percentage by the size of its group, or work from the raw counts instead.'
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
        q: 'Is this percentage calculator free?',
        a: 'Yes. It is free to use, needs no account, and runs entirely in your browser — the numbers you type are never sent to a server.'
      }
    ]
  },

  discount: {
    title: 'Discount Calculator',
    lead:
      'Find the sale price after a percentage off, or work backwards from a sale price to see the discount you were actually given.',
    sections: [
      {
        id: 'how-discounts-work',
        heading: 'How a discount is calculated',
        blocks: [
          'A discount removes a share of the original price. "25% off" means you keep 75% of the price, so the arithmetic is a single multiplication rather than a subtraction:',
          { formula: 'sale price = original price × (1 − discount ÷ 100)' },
          'A €80 jacket at 25% off costs 80 × 0.75 = €60, and the amount saved is the €20 difference. Enter 80 as the base and −25 as the percentage above to see it worked through.',
          { h: 'Working backwards from the sale price' },
          'If you know both prices and want the discount, switch to the percentage change mode:',
          { formula: 'discount = ((original − sale) ÷ original) × 100' },
          'A jacket reduced from €80 to €60 is a 25% discount. This is the useful direction when a shop advertises "was/now" prices without stating a percentage.'
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
          { note: 'The order of stacked discounts never changes the final price — multiplication is commutative. What does change it is whether tax is applied before or after the discount.' }
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a discounted price',
      steps: [
        { name: 'Enter the original price', text: 'Type the full price into the base field.' },
        { name: 'Enter the discount', text: 'Type the discount as a negative percentage, for example −25 for 25% off.' },
        { name: 'Read the sale price', text: 'The result panel shows the price you will pay, and the difference from the original is your saving.' }
      ]
    },
    faq: [
      {
        q: 'How do I calculate 20% off a price?',
        a: 'Multiply the price by 0.80. A $45 item at 20% off costs 45 × 0.8 = $36, saving $9.'
      },
      {
        q: 'How do I find the original price from a discounted price?',
        a: 'Divide the sale price by 1 minus the discount. A $60 item after 25% off was 60 ÷ 0.75 = $80 originally.'
      },
      {
        q: 'Do a 30% and a 20% discount make 50% off?',
        a: 'No. They multiply to 0.7 × 0.8 = 0.56, which is 44% off in total.'
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
          'Find 10% by moving the decimal point one place left, then build from there. On a $86 bill, 10% is $8.60, so 15% is $8.60 + $4.30 = $12.90 and 20% is $17.20. Almost every tip you will ever need is a combination of 10%, half of 10%, and double 10%.',
          { h: 'Splitting the bill' },
          'Divide the total including tip by the number of people. Rounding each share up to the nearest whole unit is the usual way to avoid ending up short.'
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
                ['France', 'Rounding up', 'Service is included by law'],
                ['Germany', '5–10%', 'Round up to a convenient figure'],
                ['Italy', '0–10%', 'A cover charge often replaces the tip'],
                ['Spain', '0–10%', 'Small change is normal'],
                ['Brazil', '10%', 'Usually printed on the bill'],
                ['Japan', 'None', 'Tipping can cause offence'],
                ['Australia', '0–10%', 'Optional, for good service']
              ]
            }
          },
          { note: 'Always check the bill before adding a tip — a service charge may already be included, in which case an extra gratuity is entirely optional.' }
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a tip',
      steps: [
        { name: 'Enter the bill total', text: 'Type the amount of the bill into the base field.' },
        { name: 'Enter the tip percentage', text: 'Type the percentage you want to leave, such as 15 or 20.' },
        { name: 'Read the tip amount', text: 'The result is the gratuity. Add it to the bill for the total, then divide by the number of diners to split it.' }
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
        id: 'vat-vs-sales-tax',
        heading: 'VAT versus sales tax',
        blocks: [
          'VAT is charged at every stage of production, with businesses reclaiming what they paid on inputs, and it is normally quoted inclusive of tax on consumer price tags. US sales tax is charged once at the point of final sale and is normally quoted exclusive, added at the till. The arithmetic is the same; what differs is whether the number you are looking at already contains the tax.',
          {
            table: {
              head: ['Rate', 'Multiply by (to add)', 'Divide by (to remove)', 'Tax share of gross'],
              rows: [
                ['5%', '1.05', '1.05', '4.76%'],
                ['7.5%', '1.075', '1.075', '6.98%'],
                ['10%', '1.10', '1.10', '9.09%'],
                ['19%', '1.19', '1.19', '15.97%'],
                ['20%', '1.20', '1.20', '16.67%'],
                ['21%', '1.21', '1.21', '17.36%'],
                ['23%', '1.23', '1.23', '18.70%'],
                ['25%', '1.25', '1.25', '20.00%']
              ]
            }
          },
          'The last column explains a common surprise: at a 25% VAT rate, tax is 20% of what you actually hand over, not 25%.'
        ]
      }
    ],
    howTo: {
      name: 'How to add VAT to a price',
      steps: [
        { name: 'Enter the net price', text: 'Type the price before tax into the base field.' },
        { name: 'Enter the tax rate', text: 'Type the VAT or sales tax rate as a positive percentage.' },
        { name: 'Read the gross price', text: 'The result is the price including tax; the difference from the net price is the tax itself.' }
      ]
    },
    faq: [
      {
        q: 'How do I remove 20% VAT from a price?',
        a: 'Divide by 1.20. A gross price of £120 has a net price of 120 ÷ 1.2 = £100 and £20 of VAT.'
      },
      {
        q: 'Why can I not just subtract the VAT rate?',
        a: 'Because the rate was applied to the net price, which is smaller than the gross. Subtracting 20% from the gross removes too much.'
      },
      {
        q: 'What share of a gross price is tax at 21%?',
        a: '21 ÷ 121 = 17.36% of the total you pay.'
      }
    ]
  },

  margin: {
    title: 'Profit Margin Calculator',
    lead:
      'Turn cost and revenue into a margin percentage, and see why margin and markup are not interchangeable.',
    sections: [
      {
        id: 'margin-formula',
        heading: 'How to calculate profit margin',
        blocks: [
          'Margin expresses profit as a share of revenue:',
          { formula: 'margin = ((revenue − cost) ÷ revenue) × 100' },
          'Selling for 250 something that cost 175 gives a profit of 75, and 75 ÷ 250 = 30% margin. Because the denominator is revenue, margin can never reach 100% — that would mean the item cost nothing.',
          { h: 'Gross, operating and net margin' },
          'The formula is the same at every level; only what counts as "cost" changes. Gross margin subtracts the direct cost of goods. Operating margin also subtracts salaries, rent and other running costs. Net margin subtracts everything, including tax and interest. Comparing a gross margin against a competitor\'s net margin is a meaningless comparison.'
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
                ['25%', '20.0%', '1.25'],
                ['33.3%', '25.0%', '1.33'],
                ['50%', '33.3%', '1.50'],
                ['100%', '50.0%', '2.00'],
                ['200%', '66.7%', '3.00']
              ]
            }
          },
          'To convert between them: margin = markup ÷ (100 + markup) × 100.'
        ]
      }
    ],
    howTo: {
      name: 'How to calculate a profit margin',
      steps: [
        { name: 'Enter the profit', text: 'Type revenue minus cost into the first field.' },
        { name: 'Enter the revenue', text: 'Type the total revenue into the second field.' },
        { name: 'Read the margin', text: 'The result is the profit margin as a percentage of revenue.' }
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
      }
    ]
  },

  faq: {
    title: 'Frequently Asked Questions',
    lead: 'Common questions about percentage calculations and about how this site works.',
    sections: [
      {
        id: 'about-the-tool',
        heading: 'About the calculator',
        blocks: [
          'The calculator solves for whichever field you leave empty. Fill in any two of base, percentage and result, and the third appears as you type — there is no button to press.',
          'Everything runs in your browser. The numbers you enter are never transmitted anywhere, which also means the tool keeps working if your connection drops after the page has loaded.'
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
        q: 'Can I use commas for decimals?',
        a: 'Yes. Pick your separator in the header. The choice is saved on your device and applies to both input and results.'
      },
      {
        q: 'Is the site available in other languages?',
        a: 'The calculator is available in English, Portuguese, Spanish, French, German and Italian. Use the language selector in the header.'
      },
      {
        q: 'Does it work on a phone?',
        a: 'Yes. The layout adapts to small screens and the number fields open a numeric keypad on mobile devices.'
      },
      {
        q: 'How precise are the results?',
        a: 'Calculations use standard double-precision floating point and results are rounded for display. For accounting work, round explicitly at the step your rules require rather than relying on the displayed value.'
      },
      {
        q: 'How do I report an error?',
        a: `Email ${CONTACT_EMAIL} with the numbers you entered and what you expected. Reproducible reports get fixed quickly.`
      },
      {
        q: 'Is the calculator free to use?',
        a: 'Yes, entirely free and with no account required.'
      }
    ]
  },

  about: {
    title: 'About CalcPercentages',
    lead:
      'A small, independent site that does one thing: percentage arithmetic, quickly and without getting in your way.',
    sections: [
      {
        id: 'what-this-is',
        heading: 'What this site is',
        blocks: [
          'CalcPercentages is an independent project, not a company. It exists because most percentage calculators online bury a simple tool under pop-ups, forced sign-ups and three screens of scrolling before the input fields appear.',
          'The design goal is that the calculator is usable within a second of the page loading, on a phone, on a slow connection. Everything else on the page — the explanations, the reference tables, the worked examples — sits below the tool, where it helps if you want it and stays out of the way if you do not.'
        ]
      },
      {
        id: 'how-it-works',
        heading: 'How it works',
        blocks: [
          'The site is a static, pre-rendered application. Every page is plain HTML delivered from a CDN, with the interactive calculator taking over once the JavaScript loads. There is no backend and no database.',
          'Calculations happen entirely on your device. Nothing you type is sent anywhere, logged, or stored.',
          { h: 'Accuracy' },
          'The formulas used are documented openly on each page so you can check the arithmetic yourself. If you find a result that looks wrong, please report it — see the contact page.'
        ]
      },
      {
        id: 'other-tools',
        heading: 'Related tools',
        blocks: [
          'The same approach is applied to two sibling calculators: a matrix calculator at matrixcalc.net and a working-days calculator at calcworkdays.com.'
        ]
      }
    ]
  },

  contact: {
    title: 'Contact',
    lead: 'Corrections, bug reports and suggestions are all welcome.',
    sections: [
      {
        id: 'get-in-touch',
        heading: 'Get in touch',
        blocks: [
          `The fastest way to reach the site is by email: ${CONTACT_EMAIL}`,
          { h: 'Reporting a wrong result' },
          'Please include the calculation mode you were using, the exact numbers you entered, the result you saw and the result you expected. That is usually enough to reproduce and fix an issue the same day.',
          { h: 'Other enquiries' },
          'Feature requests, translation corrections, accessibility problems and advertising questions all go to the same address. Replies usually take a few business days.'
        ]
      },
      {
        id: 'privacy-requests',
        heading: 'Privacy requests',
        blocks: [
          'For questions about data handling, or to exercise a right under the GDPR, LGPD or CCPA, use the same email address and mention which regulation you are writing under. See the privacy policy for what is and is not collected.'
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
    lead: 'The conditions under which this site is made available.',
    sections: [
      {
        id: 'acceptance',
        heading: 'Acceptance',
        blocks: [
          'By using CalcPercentages you agree to these terms. If you do not agree with them, please do not use the site.'
        ]
      },
      {
        id: 'use-of-the-site',
        heading: 'Use of the site',
        blocks: [
          'The calculator and its accompanying explanations are provided free of charge for personal and commercial use. You may use the results in your own work without attribution.',
          'You may not attempt to disrupt the site, use automated systems to overload it, or present it as your own service.'
        ]
      },
      {
        id: 'no-warranty',
        heading: 'Accuracy and disclaimer',
        blocks: [
          'Considerable care goes into the formulas and worked examples on this site, but the tool is provided "as is", without warranty of any kind, express or implied.',
          'Nothing here is financial, tax, accounting or legal advice. Percentage arithmetic is only one input into decisions that usually depend on rules specific to your jurisdiction and circumstances. Verify any result that matters before relying on it, and consult a qualified professional where appropriate.',
          'To the fullest extent permitted by law, the operator of this site accepts no liability for any loss arising from use of, or reliance on, the site or its content.'
        ]
      },
      {
        id: 'availability',
        heading: 'Availability and changes',
        blocks: [
          'The site is offered without any guarantee of uptime. Features, content and these terms may change at any time without notice.'
        ]
      },
      {
        id: 'intellectual-property',
        heading: 'Intellectual property',
        blocks: [
          'The written explanations, reference tables and design of this site belong to its operator. Mathematical formulas themselves are not owned by anyone; you are free to use them.'
        ]
      },
      {
        id: 'contact-terms',
        heading: 'Questions',
        blocks: [
          `Questions about these terms can be sent to ${CONTACT_EMAIL}.`
        ]
      }
    ]
  }
};

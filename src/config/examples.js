export const exampleGroups = {
  main: [
    {
      id: 'percent_of_main',
      labelKey: 'example_percent_of_main',
      mode: 'percent_of',
      values: { base: '150', percentage: '20', result: '' },
      edited: ['base', 'percentage']
    },
    {
      id: 'what_percent_main',
      labelKey: 'example_what_percent_main',
      mode: 'what_percent',
      values: { base: '45', percentage: '', result: '180' },
      edited: ['base', 'result']
    },
    {
      id: 'increase_main',
      labelKey: 'example_increase_main',
      mode: 'increase_decrease',
      values: { base: '120', percentage: '15', result: '' },
      edited: ['base', 'percentage']
    },
    {
      id: 'change_main',
      labelKey: 'example_change_main',
      mode: 'percentage_change',
      values: { base: '80', percentage: '', result: '100' },
      edited: ['base', 'result']
    }
  ],
  more: [
    {
      id: 'percent_of_more',
      labelKey: 'example_percent_of_more',
      mode: 'percent_of',
      values: { base: '45', percentage: '10', result: '' },
      edited: ['base', 'percentage']
    },
    {
      id: 'what_percent_more',
      labelKey: 'example_what_percent_more',
      mode: 'what_percent',
      values: { base: '12', percentage: '', result: '60' },
      edited: ['base', 'result']
    },
    {
      id: 'increase_more',
      labelKey: 'example_increase_more',
      mode: 'increase_decrease',
      values: { base: '90', percentage: '-20', result: '' },
      edited: ['base', 'percentage']
    },
    {
      id: 'change_more',
      labelKey: 'example_change_more',
      mode: 'percentage_change',
      values: { base: '250', percentage: '', result: '200' },
      edited: ['base', 'result']
    }
  ]
};

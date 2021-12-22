import { Container } from '../../types';

const payload: { containers: Container[] } = {
  containers: [
    {
      containerInfo: {
        id: 'first-container',
        title: 'First Container',
        children: [
          {
            containerInfo: {
              id: 'nested-container',
              title: 'Nested Container',
              children: [
                {
                  containerInfo: {
                    id: 'super-extra-nested-container',
                    title: 'Super Extra Nested Container',
                    children: [
                      {
                        chartInfo: {
                          id: 'super-nested',
                          title: 'Super Nested',
                        },
                      },
                      {
                        chartInfo: {
                          id: 'first-chart',
                          title: 'First Chart',
                        },
                      },
                    ],
                  },
                  metadata: {
                    actions: [
                      {
                        types: 'export',
                        values: ['image', 'xls', 'svg'],
                      },
                    ],
                  },
                },
                {
                  chartInfo: {
                    id: 'second-chart',
                    title: 'Second Chart',
                  },
                },
              ],
            },
          },
          {
            containerInfo: {
              id: 'super-nested-container',
              title: 'Super Nested Container',
              children: [
                {
                  chartInfo: {
                    id: 'damn-nested',
                    title: 'Damn Nested',
                  },
                },
              ],
            },
          },
        ],
      },
      metadata: {
        actions: [
          {
            types: 'export',
            values: ['image', 'xls', 'svg'],
          },
        ],
      },
    },
  ],
};

export { payload };

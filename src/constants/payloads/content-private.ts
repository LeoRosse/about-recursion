import { Container } from '../../types';

const contentPrivate: { containers: Container[] } = {
  containers: [
    {
      containerInfo: {
        id: 'first-container',
        title: 'First Container',
        cols: 3,
        rows: 2,
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
          {
            chartInfo: {
              id: 'first-chart',
              title: 'First Chart',
            },
          },
          {
            containerInfo: {
              id: 'nested-container',
              title: 'Nested Container',
              cols: 2,
              rows: 1,
              children: [
                {
                  chartInfo: {
                    id: 'damn-nested',
                    title: 'Damn Nested',
                  },
                },
                {
                  chartInfo: {
                    id: 'damn-nested',
                    title: 'Damn Nested',
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
              id: 'damn-nested',
              title: 'Damn Nested',
            },
          },
          {
            chartInfo: {
              id: 'damn-nested',
              title: 'Damn Nested',
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

export { contentPrivate };

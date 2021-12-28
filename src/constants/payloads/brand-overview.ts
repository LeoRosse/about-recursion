import { Container } from '../../types';

const brandOverview: { containers: Container[] } = {
  containers: [
    {
      containerInfo: {
        id: 'overview',
        title: 'Overview',
        children: [
          {
            containerInfo: {
              id: 'audience',
              title: 'Audience Public',
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
                    id: 'damn-nested',
                    title: 'Damn Nested',
                  },
                },
                {
                  chartInfo: {
                    id: 'second-chart',
                    title: 'Second Chart',
                  },
                },
                {
                  chartInfo: {
                    id: 'third-chart',
                    title: 'Third Chart',
                  },
                },
                {
                  chartInfo: {
                    id: 'fourth-chart',
                    title: 'Four Chart',
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
              relatedActions: [
                {
                  types: 'policy',
                  values: ['public'],
                },
              ],
            },
          },
          {
            containerInfo: {
              id: 'content',
              title: 'Content',
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
                    id: 'second-chart',
                    title: 'Second Chart',
                  },
                },
                {
                  containerInfo: {
                    id: 'nested-container',
                    cols: 1,
                    rows: 2,
                    children: [
                      {
                        chartInfo: {
                          id: 'third-chart',
                          title: 'Third Chart',
                        },
                      },
                      {
                        chartInfo: {
                          id: 'fourth-chart',
                          title: 'Fourth Chart',
                        },
                      },
                    ],
                  },
                  metadata: {
                    containerBox: false,
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
                    id: 'fivth-chart',
                    title: 'Fivth Chart',
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
            containerInfo: {
              id: 'best-posts',
              title: 'Best Posts',
              children: [
                {
                  chartInfo: {
                    id: 'super-nested',
                    title: 'Super Nested',
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
            containerInfo: {
              id: 'worst-posts',
              title: 'Worst Posts',
              children: [
                {
                  chartInfo: {
                    id: 'super-nested',
                    title: 'Super Nested',
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
            containerInfo: {
              id: 'top-images',
              title: 'Top Images',
              children: [
                {
                  chartInfo: {
                    id: 'top-images',
                    title: 'Top Images',
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
      },
    },
  ],
};

export { brandOverview };

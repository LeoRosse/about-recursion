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
                    id: 'first-chart',
                    title: 'First Chart',
                  },
                },
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
              id: 'first-container',
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
                    id: 'first-chart',
                    title: 'First Chart',
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
                    id: 'damn-nested',
                    title: 'Damn Nested',
                  },
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
          },
          {
            containerInfo: {
              id: 'top-images',
              title: 'Top Images',
              children: [
                {
                  chartInfo: {
                    id: 'super-nested',
                    title: 'Super Nested',
                  },
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

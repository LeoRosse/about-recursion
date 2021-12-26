import { Container } from '../types';
import { DataSet } from '../types/data-set';
import { createObjectNested } from './create-nested-object';

const recursiveStructure: { containers: Container[] } = {
  containers: [
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
        relatedActions: [
          {
            types: 'policy',
            values: ['public'],
          },
        ],
      },
    },
  ],
};

const output: DataSet = {
  audience: {
    'super-nested': {
      data: {},
    },
    'first-chart': {
      data: {},
    },
    'damn-nested': {
      data: {},
    },
    'first-container': {
      'super-nested': {
        data: {},
      },
      'first-chart': {
        data: {},
      },
    },
  },
};

describe(`Create Nested Object Tests`, () => {
  test(`crete Nested Object from recursive structure`, () => {
    expect(createObjectNested(recursiveStructure.containers[0])).toEqual(output);
  });
});

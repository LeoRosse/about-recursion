import { DataSet } from '../types/data-set';
import { updateNestedObject } from './update-nested-object';

const tinyData: DataSet = {
  audience: {
    'awesome-nested': {
      data: {},
    },
    awesome: {
      'awesome-nested': {
        data: {},
      },
    },
  },
};

const output: DataSet = {
  audience: {
    'awesome-nested': {
      data: [
        {
          test: 'test',
        },
        {
          pippo: 'pippo',
        },
      ],
    },
    awesome: {
      'awesome-nested': {
        data: [
          {
            test: 'test',
          },
          {
            pippo: 'pippo',
          },
        ],
      },
    },
  },
};

describe(`Update Nested Object Tests`, () => {
  test(`update Nested Object from recursive structure with some data`, () => {
    expect(updateNestedObject(tinyData, 'awesome-nested', [{ test: 'test' }, { pippo: 'pippo' }])).toEqual(output);
  });
});

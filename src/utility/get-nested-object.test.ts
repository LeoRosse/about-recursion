import { DataSet } from '../types/data-set';
import { getNestedObject } from './get-nested-object';

const tinyData: DataSet = {
  audience: {
    'super-nested': {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'quidem molestiae enim',
        },
      ],
    },
  },
};

const output: DataSet | Record<string, unknown> | undefined = {
  data: [
    {
      userId: 1,
      id: 1,
      title: 'quidem molestiae enim',
    },
  ],
};

describe(`Get Nested Object Tests`, () => {
  test(`get Nested Object from recursive structure with some data`, () => {
    expect(getNestedObject(tinyData, 'super-nested')).toEqual(output);
  });
  test(`get Nested Object from recursive structure with some data, no key`, () => {
    expect(getNestedObject(tinyData, 'nested')).toEqual(undefined);
  });
});

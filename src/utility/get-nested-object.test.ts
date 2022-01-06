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

const anotherInput: DataSet = {
  'worst-posts': {
    'super-nested': {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'quidem molestiae enim',
        },
        {
          userId: 1,
          id: 2,
          title: 'sunt qui excepturi placeat culpa',
        },
      ],
    },
  },
  'top-images-container': {
    'top-images': {
      data: {
        users: {
          data: [
            {
              id: '1',
              name: 'Leanne Graham',
              username: 'Bret',
              email: 'Sincere@april.biz',
              phone: '1-770-736-8031 x56442',
              website: 'hildegard.org',
            },
          ],
        },
      },
    },
  },
};

const anotherOutput: DataSet | Record<string, unknown> | undefined = {
  'top-images': {
    data: {
      users: {
        data: [
          {
            id: '1',
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
          },
        ],
      },
    },
  },
};

describe(`Get Nested Object Tests`, () => {
  test(`get Nested Object from recursive structure with some data`, () => {
    expect(getNestedObject(tinyData, 'super-nested')).toEqual(output);
  });
  test(`get Nested Object from recursive structure with some data, no key`, () => {
    expect(getNestedObject(tinyData, 'nested')).toEqual(undefined);
  });
  test(`get Nested Object from recursive structure with some data, no key`, () => {
    expect(
      getNestedObject(
        Object.keys(anotherInput).reduce((acc, key) => {
          if (key === 'top-images-container') return { [key]: anotherInput[key] };
          return acc;
        }, {}),
        'top-images-container',
      ),
    ).toEqual(anotherOutput);
  });
});

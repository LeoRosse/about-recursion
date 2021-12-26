import { DataSet } from '../types/data-set';

const updateNestedObject = <T>(dataSet: DataSet, keyName: string, update: T): DataSet => {
  for (const key in dataSet) {
    const entry = dataSet[key];
    if (key === keyName && typeof entry['data'] === 'object') {
      entry['data'] = update;
    } else updateNestedObject(entry as DataSet, keyName, update);
  }
  return dataSet;
};

export { updateNestedObject };

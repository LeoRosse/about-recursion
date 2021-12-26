import { DATA_KEY } from '../constants/data-key';
import { DataSet } from '../types/data-set';

const updateNestedObject = <T>(dataSet: DataSet, keyName: string, update: T): DataSet => {
  if (typeof dataSet !== 'object') return dataSet;
  for (const key in dataSet) {
    const entry = dataSet[key];
    if (typeof entry !== 'object' || key === DATA_KEY) return dataSet;
    if (key === keyName) {
      entry[DATA_KEY] = update;
    } else updateNestedObject(entry as DataSet, keyName, update);
  }
  return dataSet;
};

export { updateNestedObject };

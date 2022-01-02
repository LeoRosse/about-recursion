import { DataSet } from '../types/data-set';

const getNestedObject = (o: DataSet, key: string): DataSet | Record<string, unknown> | undefined => {
  for (const k in o) {
    const entry = o[k];
    if (k === key) {
      return entry;
    }
    return getNestedObject(entry as DataSet, key);
  }
  return;
};

export { getNestedObject };

import { DataSet } from './data-set';

const isDataSet = (element: unknown): element is DataSet => {
  return element !== undefined;
};

export { isDataSet };

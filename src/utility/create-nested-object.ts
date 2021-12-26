import { DATA_KEY } from '../constants/data-key';
import { Container } from '../types';
import { Chart } from '../types/chart';
import { DataSet } from '../types/data-set';
import { isContainer } from '../types/is-container';

const createObjectNested = (element: Container | Chart): DataSet => {
  if (isContainer(element)) {
    return {
      [element.containerInfo.id]: element.containerInfo?.children?.reduce(
        (acc, curr) => ({ ...acc, ...createObjectNested(curr) }),
        {},
      ),
    };
  }
  return { [element.chartInfo.id]: { [DATA_KEY]: {} } };
};

export { createObjectNested };

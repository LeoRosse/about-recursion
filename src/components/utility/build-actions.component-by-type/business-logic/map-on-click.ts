import { DataSet, RefContextInterface } from 'src/types';
import { getNestedObject } from 'src/utility/get-nested-object';

const mapOnClick = (containerId: string, dataSet: DataSet, ref: RefContextInterface): Record<string, () => void> => ({
  image: () => window.console.log(`onClick for value: image`, ref),
  svg: () => window.console.log(`onClick for value: svg`),
  xls: () => window.console.log(`onClick for value:`, getNestedObject(dataSet, containerId)),
});

export { mapOnClick };

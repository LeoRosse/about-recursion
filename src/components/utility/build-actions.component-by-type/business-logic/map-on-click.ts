import { Dispatch } from '@reduxjs/toolkit';
import { setChartAction } from 'src/store/slices/charts-actions-slice';
import { store } from 'src/store/store';
import { RefContextInterface } from 'src/types';
import { getNestedObject } from 'src/utility/get-nested-object';

const mapOnClick = (containerId: string, dispatch: Dispatch, ref: RefContextInterface): Record<string, () => void> => ({
  image: () => window.console.log(`onClick for value: image`, ref),
  svg: () => window.console.log(`onClick for value: svg`),
  xls: () => {
    const dataSet = store.getState().data.dataSet;
    window.console.log(dataSet[containerId], 'dataSet');
    window.console.log(containerId, 'containerId');
    window.console.log(
      `onClick for value:`,
      getNestedObject(
        Object.keys(dataSet).reduce((acc, key) => {
          if (key === containerId) return { [key]: dataSet[key] };
          return acc;
        }, {}),
        containerId,
      ),
    );
  },
  area: () => dispatch(setChartAction({ [containerId]: { chartType: 'area' } })),
  line: () => dispatch(setChartAction({ [containerId]: { chartType: 'line' } })),
});

export { mapOnClick };

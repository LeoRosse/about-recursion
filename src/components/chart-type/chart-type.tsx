import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store/hooks';
import { setChartAction } from 'src/store/slices/charts-actions-slice';
import { ComponentActionsProps } from 'src/types';

interface ChartTypeProps extends ComponentActionsProps {}

const ChartType: React.FC<ChartTypeProps> = ({ containerId, values }) => {
  const action = useAppSelector((state) => state.chartActions.actions[containerId]);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setChartAction({ [containerId]: { chartType: values[0].label } }));
  }, []);

  window.console.log('Rendering Chart Type', action);

  return (
    <div>
      {values.map(({ label, onClick }) => (
        <button
          key={label}
          type="button"
          onClick={onClick}
          className={action && label === action['chartType'] ? 'bg-indigo' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export { ChartType };

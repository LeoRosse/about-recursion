import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Chart } from 'src/types/chart';
import { isContainer } from 'src/types/is-container';
import { createDataSet } from '../store/slices';
import { Container } from '../types';
import { createObjectNested } from '../utility/create-nested-object';
import { BuildActionsComponentByType } from './utility/build-actions.component-by-type';

interface ActionsComponentProps {
  container: Container | Chart;
}

const ActionsComponent: React.FC<ActionsComponentProps> = ({ container }) => {
  const dispatch = useDispatch();
  const isContainerCheck = isContainer(container);
  React.useEffect(() => {
    if (!isContainerCheck || !container.containerInfo.children) return;
    dispatch(
      createDataSet({
        [container.containerInfo.id]: container.containerInfo.children.reduce(
          (acc, curr) => ({ ...acc, ...createObjectNested(curr) }),
          {},
        ),
      }),
    );
  }, [container]);

  return (
    <div className="text-right">
      <BuildActionsComponentByType
        actions={container.metadata?.actions}
        containerId={isContainerCheck ? container.containerInfo.id : container.chartInfo.id}
      />
    </div>
  );
};

export { ActionsComponent };

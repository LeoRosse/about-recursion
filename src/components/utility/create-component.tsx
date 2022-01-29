import * as React from 'react';
import { RefProvider } from 'src/providers/ref-provider';
import { Container } from 'src/types';
import { Chart } from 'src/types/chart';
import { isContainer } from 'src/types/is-container';
import { ActionsComponent } from '../actions-component';
import { GenericContainer } from '../hoc/generic-container';
import { displayContainer } from './display-container';
import { createChart } from './create-chart';
import { useAppDispatch } from 'src/store/hooks';
import { inizializeDragItems } from 'src/store/slices/drag-n-drop.slice';
import { DraggableList } from '../draggable-list/draggable-list';

const createComponent = (container: Container | Chart): JSX.Element | null => {
  const dispatch = useAppDispatch();
  // container
  if (isContainer(container)) {
    // here the logic to render the container (print, policy etc)
    if (!displayContainer(container)) return null;
    dispatch(inizializeDragItems(container));
    return (
      <RefProvider>
        {(container.containerInfo.title || container.metadata?.actions?.length) && (
          <div className="flex justify-between my-2">
            {container.containerInfo.title}
            {container.metadata?.actions?.length && <ActionsComponent container={container} />}
          </div>
        )}
        <GenericContainer container={container}>
          <DraggableList container={container} createComponent={createComponent} />
        </GenericContainer>
      </RefProvider>
    );
  }
  // chart
  return createChart(container);
};

export { createComponent };

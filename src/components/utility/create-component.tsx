import * as React from 'react';
import { RefProvider } from 'src/providers/ref-provider';
import { Container } from 'src/types';
import { Chart } from 'src/types/chart';
import { isContainer } from 'src/types/is-container';
import { ActionsComponent } from '../actions-component';
import { GenericContainer } from '../hoc/generic-container';
import { displayContainer } from './display-container';
import { returnChartsDinamically } from './return-charts-dinamically';

const createComponent = (container: Container | Chart): JSX.Element | null => {
  // container
  if (isContainer(container)) {
    // here the logic to render the container (print, policy etc)
    if (!displayContainer(container)) return null;
    return (
      <RefProvider>
        {(container.containerInfo.title || container.metadata?.actions?.length) && (
          <div className="flex justify-between my-2">
            {container.containerInfo.title}
            {container.metadata?.actions?.length && <ActionsComponent container={container} />}
          </div>
        )}
        <GenericContainer containerId={container.containerInfo.id}>
          <div
            key={container.containerInfo.id}
            className={`${
              container?.metadata?.containerBox === false ? '' : 'border-4 p-4'
            } rounded-lg gap-4 grid grid-cols-${container.containerInfo.cols} grid-rows-${
              container.containerInfo.rows
            } grid-flow-row`}
          >
            {container.containerInfo.children?.map((child: Container | Chart) => (
              <div key={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}>{createComponent(child)}</div>
            ))}
          </div>
        </GenericContainer>
      </RefProvider>
    );
  }
  // chart
  return <div key={container.chartInfo.id}>{returnChartsDinamically(container.chartInfo.id)}</div>;
};

export { createComponent };

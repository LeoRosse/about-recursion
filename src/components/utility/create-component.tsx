import * as React from 'react';
import { RefProvider } from 'src/providers/ref-provider';
import { Container } from 'src/types';
import { Chart } from 'src/types/chart';
import { isContainer } from 'src/types/is-container';
import { ActionsComponent } from '../actions-component';
import { GenericContainer } from '../hoc/generic-container';
import { displayContainer } from './display-container';
import { createChart } from './create-chart';

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
        <GenericContainer container={container}>
          {container.containerInfo.children?.map((child: Container | Chart) => (
            <div key={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}>{createComponent(child)}</div>
          ))}
        </GenericContainer>
      </RefProvider>
    );
  }
  // chart
  return <div key={container.chartInfo.id}>{createChart(container)}</div>;
};

export { createComponent };

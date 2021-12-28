import * as React from 'react';
import { RefProvider } from '../providers/ref-provider';
import { Container } from '../types';
import { Chart } from '../types/chart';
import { isContainer } from '../types/is-container';
import { ActionsComponent } from './actions-component';
import { GenericChartContainer } from './hoc/generic-chart-container';
import { SectionHeading } from './section-heading/section-heading';
import { createContainer } from './utility/create-container';
import { displayContainer } from './utility/display-container';
import { returnChartsDinamically } from './utility/return-charts-dinamically';

interface GraphSectionProps {
  containers: Container[];
}

const GraphSection: React.FC<GraphSectionProps> = ({ containers }) => {
  // window.console.log('[LOG]: first level');
  const createComponent = (container: Container | Chart) => {
    // container
    if (isContainer(container)) {
      // window.console.log(container, '[LOG]: is container');
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
          <GenericChartContainer containerId={container.containerInfo.id}>
            <div
              key={container.containerInfo.id}
              className={`${
                container?.metadata?.containerBox === false ? '' : 'border-4 p-4'
              } rounded-lg gap-4 grid grid-cols-${container.containerInfo.cols} grid-rows-${
                container.containerInfo.rows
              } grid-flow-row`}
            >
              {container.containerInfo.children?.map((child: Container | Chart) => {
                // window.console.log('[LOG]: is child');
                return (
                  <div key={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}>
                    {createComponent(child)}
                  </div>
                );
              })}
            </div>
          </GenericChartContainer>
        </RefProvider>
      );
    }
    // window.console.log(container, '[LOG]: is chart');
    // chart
    return <div key={container.chartInfo.id}>{returnChartsDinamically(container.chartInfo.id)}</div>;
  };
  // page
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl space-y-24">
      <SectionHeading container={containers[0]} />
      {createContainer(createComponent, containers[0].containerInfo.children)}
    </div>
  );
};

export { GraphSection };

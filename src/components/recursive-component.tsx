import * as React from 'react';
import { Container } from '../types';
import { Chart } from '../types/chart';
import { isContainer } from '../types/is-container';
import { chartsMap } from './charts/charts-map';
import { ActionsComponent } from './actions-component';
import { createContainer } from './utility/create-container';

interface RecursiveComponentProps {
  containers: Container[];
}

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ containers }) => {
  const [policy, setPolicy] = React.useState<string>('public');
  window.console.log('[LOG]: first level');
  const createComponent = (container: Container | Chart) => {
    // container
    if (isContainer(container)) {
      window.console.log(container, '[LOG]: is container');
      const hasPolicy = container.metadata?.relatedActions?.find((relAct) => relAct.types === 'policy');
      if (hasPolicy && !hasPolicy?.values.includes(policy)) return null;
      return (
        <>
          {(container.containerInfo.title || container.metadata?.actions?.length) && (
            <div className="flex justify-between my-2">
              {container.containerInfo.title}
              {container.metadata?.actions?.length && <ActionsComponent />}
            </div>
          )}
          <div
            key={container.containerInfo.id}
            className={`${
              container?.metadata?.containerBox === false ? '' : 'border-4 p-4'
            } rounded-lg gap-4 grid grid-cols-${container.containerInfo.cols} grid-rows-${
              container.containerInfo.rows
            } grid-flow-row`}
          >
            {container.containerInfo.children?.map((child: Container | Chart) => {
              window.console.log('[LOG]: is child');
              return (
                <div key={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}>
                  {createComponent(child)}
                </div>
              );
            })}
          </div>
        </>
      );
    }
    window.console.log(container, '[LOG]: is chart');
    // chart
    return <div key={container.chartInfo.id}>{chartsMap[container.chartInfo.id]}</div>;
  };
  // page
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl space-y-24">
      {/* Section Heading */}
      <div className="flex justify-between my-4 ">
        <div>Name: {containers[0].containerInfo.title}</div>
        <div className="flex">
          <button onClick={() => setPolicy('public')}>public</button>
          <button onClick={() => setPolicy('private')}>private</button>
        </div>
      </div>
      {/* End Section Heading */}
      {createContainer(createComponent, containers[0].containerInfo.children, policy)}
    </div>
  );
};

export { RecursiveComponent };

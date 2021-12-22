import * as React from 'react';
import { Container } from '../types';
import { Chart } from '../types/chart';
import { isContainer } from '../types/is-container';
import { chartsMap } from './charts/charts-map';
import { ActionsComponent } from './actions-component';

interface RecursiveComponentProps {
  containers: Container[];
}

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ containers }) => {
  window.console.log('[LOG]: first level');
  const createComponent = (container: Container | Chart) => {
    // container
    if (isContainer(container)) {
      window.console.log(container.containerInfo.id, '[LOG]: is container');
      return (
        <>
          {container.containerInfo.title ||
            (container.metadata?.actions.length && (
              <div className="flex justify-between my-2">
                {container.containerInfo.title}
                {container.metadata?.actions.length && <ActionsComponent />}
              </div>
            ))}
          <div
            key={container.containerInfo.id}
            className={`border-2 border-black p-4 gap-4 grid grid-cols-${container.containerInfo.cols} grid-rows-${container.containerInfo.rows}`}
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
    <>
      <div className="flex justify-between my-4">
        <div>Name: {containers[0].containerInfo.title}</div>
        <div className="flex">
          bottoni
          {/* <button onClick={() => setPolicy('public')}>public</button>
          <button onClick={() => setPolicy('private')}>private</button> */}
        </div>
      </div>
      {containers[0].containerInfo.children.map((container) => (
        <div key={isContainer(container) ? container.containerInfo.id : container.chartInfo.id}>
          {createComponent(container)}
        </div>
      ))}
    </>
  );
};

export { RecursiveComponent };

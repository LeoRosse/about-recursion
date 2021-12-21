import * as React from "react";
import { Container } from "../types";
import { Chart } from "../types/chart";
import { isContainer } from "../types/is-container";
import { chartsMap } from "./charts/charts-map";
import { ChildComponent } from "./child-component";

interface RecursiveComponentProps {
  containers: Container[];
}

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({
  containers,
}) => {
  window.console.log("[LOG]: first level");
  const createComponent = (container: Container | Chart) => {
    if (isContainer(container)) {
      window.console.log("[LOG]: is container");
      return (
        <>
          <ChildComponent />
          <div
            key={container.containerInfo.id}
            className="border-2 border-black p-2"
          >
            {container.containerInfo.children?.map(
              (child: Container | Chart) => {
                window.console.log("[LOG]: is child");
                return (
                  <div
                    key={
                      isContainer(child)
                        ? child.containerInfo.id
                        : child.chartInfo.id
                    }
                  >
                    {createComponent(child)}
                  </div>
                );
              }
            )}
          </div>
        </>
      );
    }
    return (
      <div key={container.chartInfo.id}>
        {chartsMap[container.chartInfo.id]}
      </div>
    );
  };
  return (
    <>
      {containers.map((container) => (
        <div key={container.containerInfo.id}>{createComponent(container)}</div>
      ))}
    </>
  );
};

export { RecursiveComponent };

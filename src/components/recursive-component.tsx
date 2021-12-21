import * as React from "react";
import { Container } from "../types";
import { Chart } from "../types/chart";
import { isContainer } from "../types/is-container";

interface RecursiveComponentProps {
  containers: Container[];
}

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({
  containers,
}) => {
  const createComponent = (container: Container | Chart) => {
    if (isContainer(container))
      return (
        <div key={container.containerInfo.id}>
          {container.containerInfo.children?.map((child: Container | Chart) => {
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
          })}
        </div>
      );
    return <div key={container.chartInfo.id}>{container.chartInfo.title}</div>;
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

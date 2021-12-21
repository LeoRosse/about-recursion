import { Chart } from "./chart";
import { Container } from "./container";

const isContainer = (element: Container | Chart): element is Container => {
  return (element as Container).containerInfo !== undefined;
};

export { isContainer };

import * as React from "react";
import { useAppSelector } from "../store/hooks";

const ChildComponent: React.FC = () => {
  const test = useAppSelector((state) => state.data.test);

  window.console.log(test, "[LOG] child component");
  return <div>Child Component</div>;
};

export { ChildComponent };

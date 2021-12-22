import * as React from "react";
import { useAppSelector } from "../store/hooks";

const ActionsComponent: React.FC = () => {
  const test = useAppSelector((state) => state.data.test);

  window.console.log(test, "[LOG] actions component");
  return <div className="text-right">Actions Component</div>;
};

export { ActionsComponent };

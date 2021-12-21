import * as React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { setDataTest } from "../../store/slices";

const DamnNested: React.FC = () => {
  const dispatch = useDispatch();
  const test = useAppSelector((state) => state.data.test);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setDataTest({ test: true }));
    }, 3000);
  }, []);

  window.console.log(test, "[LOG] damn nested");
  return <div>Damn Nested</div>;
};

export { DamnNested };

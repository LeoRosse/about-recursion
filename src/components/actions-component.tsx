import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setDataSet } from '../store/slices';
import { Container } from '../types';
import { createObjectNested } from '../utility/create-nested-object';
import { Dropdown } from './dropdown/dropdown';

interface ActionsComponentProps {
  container: Container;
}

const ActionsComponent: React.FC<ActionsComponentProps> = ({ container }) => {
  // window.console.log(container, 'container');
  // window.console.log(
  //   container.containerInfo.children.reduce((acc, curr) => ({ ...acc, ...createObjectNested(curr) }), {}),
  //   'container worked',
  // );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      setDataSet({
        [container.containerInfo.id]: container.containerInfo.children.reduce(
          (acc, curr) => ({ ...acc, ...createObjectNested(curr) }),
          {},
        ),
      }),
    );
  }, [container]);
  return (
    <div className="text-right">
      <Dropdown />
    </div>
  );
};

export { ActionsComponent };

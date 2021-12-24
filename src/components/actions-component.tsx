import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setDataSet } from '../store/slices';
import { Container } from '../types';
import { createObjectNested } from '../utility/create-nested-object';
import { useAppSelector } from '../store/hooks';

interface ActionsComponentProps {
  container: Container;
}

const ActionsComponent: React.FC<ActionsComponentProps> = ({ container }) => {
  const test = useAppSelector((state) => state.data.test);

  window.console.log(container, 'container');
  window.console.log(
    container.containerInfo.children.reduce((acc, curr) => ({ ...acc, ...createObjectNested(curr) }), {}),
    'container worked',
  );
  const dispatch = useDispatch();
  window.console.log(test, 'test');
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
  return <div className="text-right">Actions Component</div>;
};

export { ActionsComponent };

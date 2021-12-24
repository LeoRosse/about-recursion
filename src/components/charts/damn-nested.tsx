import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setDataTest } from '../../store/slices';

const DamnNested: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setDataTest({ test: true }));
    }, 3000);
  }, []);

  return <div>Damn Nested</div>;
};

export { DamnNested };

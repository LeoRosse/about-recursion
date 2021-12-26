import * as React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateDataSet } from '../../store/slices';

const FourthChart: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => dispatch(updateDataSet({ keyName: 'fourth-chart', data })));
  }, []);

  return <div>Fourth Chart</div>;
};

export { FourthChart };

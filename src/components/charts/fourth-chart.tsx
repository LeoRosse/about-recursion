import * as React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateDataSet } from '../../store/slices';
import { Component } from '../../types/component';

interface FourthChartProps extends Component {}

const FourthChart: React.FC<FourthChartProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => dispatch(updateDataSet({ keyName: id, data })));
  }, []);

  return <div>Fourth Chart</div>;
};

export default FourthChart;

import * as React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateDataSet } from '../../store/slices';
import { Component } from '../../types/component';

interface FirstChartProps extends Component {}

const FirstChart: React.FC<FirstChartProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch(updateDataSet({ keyName: id, data })));
  }, []);

  return <div>First Chart</div>;
};

export default FirstChart;

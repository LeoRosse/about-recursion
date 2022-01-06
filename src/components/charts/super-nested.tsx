import * as React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateDataSet } from '../../store/slices';
import { Component } from '../../types/component';

interface SuperNestedProps extends Component {}

const SuperNested: React.FC<SuperNestedProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  window.console.log('Rendering Super Nested');
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => dispatch(updateDataSet({ keyName: id, data })));
  }, []);
  return <>Super Nested</>;
};

export default SuperNested;

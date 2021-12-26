import * as React from 'react';
import { Component } from '../../types/component';

interface TheComponentProps extends Component {}

const returnChartsDinamically = (id: string) => {
  // Assume that charts are all in the same folder, and the files name is the same of the ids in the payloads
  const TheComponent = React.lazy<React.ComponentType<TheComponentProps>>(() => import(`../charts/${id}`));
  return <TheComponent id={id} />;
};

export { returnChartsDinamically };

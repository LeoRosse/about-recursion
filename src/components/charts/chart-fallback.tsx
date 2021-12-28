import * as React from 'react';
import { Component } from 'src/types/component';

interface ChartFallbackProps extends Component {}

const ChartFallback: React.FC<ChartFallbackProps> = () => {
  return <div>No Chart Matching</div>;
};

export default ChartFallback;

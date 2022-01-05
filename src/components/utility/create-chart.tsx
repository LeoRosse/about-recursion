import * as React from 'react';
import { Chart } from 'src/types/chart';
import { Component } from '../../types/component';
import ChartFallback from '../charts/chart-fallback';

interface TheComponentProps extends Component {
  chart: Chart;
}

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireCharts = require.context('../charts', true, /.tsx$/);

// this function returns charts based on the own ids. The filename MUST match with the id on payloads.
const createChart = (chart: Chart): JSX.Element => {
  const {
    chartInfo: { id },
  } = chart;
  const string = requireCharts.keys().find((fileName) => fileName.includes(id));
  if (!string) return <ChartFallback id="chart-fallback" />;
  const componentConfig = requireCharts(string);
  const TheComponent = componentConfig.default as React.ComponentType<TheComponentProps>;
  // wrap this with error handler
  return <TheComponent id={id} chart={chart} />;
};

export { createChart };

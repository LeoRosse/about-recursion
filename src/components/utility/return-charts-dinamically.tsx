import * as React from 'react';
import { Component } from '../../types/component';
import ChartFallback from '../charts/chart-fallback';

interface TheComponentProps extends Component {}

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireCharts = require.context('../charts', true, /.tsx$/);

// this function returns charts based on the own ids. The filename MUST match with the id on payloads.
const returnChartsDinamically = (id: string): JSX.Element => {
  const string = requireCharts.keys().find((fileName) => fileName.includes(id));
  if (!string) return <ChartFallback id="chart-fallback" />;
  const componentConfig = requireCharts(string);
  const TheComponent = componentConfig.default as React.ComponentType<TheComponentProps>;
  return <TheComponent id={id} />;
};

export { returnChartsDinamically };

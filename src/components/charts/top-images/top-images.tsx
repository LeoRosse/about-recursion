import * as React from 'react';
import { Chart } from 'src/types/chart';
import { Component } from 'src/types/component';

interface TopImagesProps extends Component {
  chart: Chart;
}

const TopImages: React.FC<TopImagesProps> = ({ chart, id }) => {
  window.console.log(id, 'id');
  window.console.log(chart, 'chart');

  return <div>Top Images</div>;
};

export default TopImages;

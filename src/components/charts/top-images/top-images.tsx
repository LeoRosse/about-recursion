import * as React from 'react';
import { Component } from 'src/types/component';

interface TopImagesProps extends Component {}

const TopImages: React.FC<TopImagesProps> = ({ id }) => {
  window.console.log(id, 'id');
  return <div>Top Images</div>;
};

export default TopImages;

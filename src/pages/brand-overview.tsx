import * as React from 'react';
import { GraphSection } from 'src/components/graph-section';
import { brandOverview } from 'src/constants/payloads/brand-overview';

const BrandOverview = () => {
  window.console.log('Rendering: Brand Overview');
  return <GraphSection containers={brandOverview.containers} />;
};

export default BrandOverview;

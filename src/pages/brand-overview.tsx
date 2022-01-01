import * as React from 'react';
import { GraphSection } from 'src/components/graph-section';
import { Layout } from 'src/components/layout/layout';
import { brandOverview } from 'src/constants/payloads/brand-overview';

const BrandOverview = () => {
  window.console.log('Rendering: Brand Overview');
  return <GraphSection containers={brandOverview.containers} />;
};

export default BrandOverview;

BrandOverview.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

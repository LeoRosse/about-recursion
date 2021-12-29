import * as React from 'react';
import { GraphSection } from 'src/components/graph-section';
import { brandOverview } from 'src/constants/payloads/brand-overview';

const BrandOverview: React.FC = () => <GraphSection containers={brandOverview.containers} />;

export default BrandOverview;

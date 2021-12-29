import * as React from 'react';
import { GraphSection } from 'src/components/graph-section';
import { brandOverview } from 'src/constants/payloads/brand-overview';

const Home: React.FC = () => <GraphSection containers={brandOverview.containers} />;

export default Home;

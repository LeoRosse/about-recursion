import * as React from 'react';
import { Link } from 'src/components/link';
import { Layout } from 'src/components/layout/layout';
import { LAYOUT_KEY } from 'src/constants/layout-key';
import { EnrichedComponent } from 'src/types';

const Articles = () => (
  <div>
    Articles Page <Link to="/articles/1">Go</Link>
  </div>
);

export default Articles;

// this pattern allows us to specify nested layout!
(Articles as EnrichedComponent)[LAYOUT_KEY] = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

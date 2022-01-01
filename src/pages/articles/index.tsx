import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'src/components/layout/layout';

const Articles = () => (
  <div>
    Articles Page <Link to="/articles/1">Go</Link>
  </div>
);

export default Articles;

// this pattern allows us to specify nested layout!
Articles.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

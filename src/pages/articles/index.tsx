import * as React from 'react';
import { LoaderFn, MakeGenerics, useMatch } from 'react-location';
import { client } from 'src/clients/graphql-client';
import { GET_POSTS } from 'src/graphql/query/posts';
import { Link } from 'src/components/link';
import { Layout } from 'src/components/layout/layout';
import { LAYOUT_KEY } from 'src/constants/layout-key';
import { EnrichedComponent } from 'src/types';

type Route = MakeGenerics<{ LoaderData: any }>;

export const loader: LoaderFn<Route> = async () => {
  return await client.query({ query: GET_POSTS });
};

const Articles = () => {
  const { data } = useMatch<Route>();
  window.console.log('Rendering: Articles Page');

  window.console.log(data, 'Articles Page: [data]');
  return (
    <div>
      Articles Page <Link to="/articles/1">Go</Link>
    </div>
  );
};

export default Articles;

// this pattern allows us to specify nested layout!
(Articles as EnrichedComponent)[LAYOUT_KEY] = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

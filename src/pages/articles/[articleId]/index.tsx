import * as React from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { Layout } from 'src/components/layout/layout';
import { Link } from 'src/components/link';

type Route = MakeGenerics<{ LoaderData: any; Params: { articleId: string } }>;

const Article = () => {
  const {
    params: { articleId },
  } = useMatch<Route>();
  window.console.log('Rendering: Article Page');

  window.console.log(articleId, 'article id');
  return (
    <div>
      Article Page
      <Link preload={5000} to="/articles/2">
        Go
      </Link>
    </div>
  );
};

export default Article;

// this pattern allows us to specify nested layout!
Article.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'src/components/layout/layout';
import { Link } from 'src/components/link';

const Article = () => {
  const { articleId } = useParams<{ articleId: string }>();
  window.console.log(articleId, 'article id');
  return (
    <div>
      Article Page <Link to="/articles/2">Go</Link>
    </div>
  );
};

export default Article;

// this pattern allows us to specify nested layout!
Article.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

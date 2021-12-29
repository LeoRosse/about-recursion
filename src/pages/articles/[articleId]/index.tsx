import * as React from 'react';
import { useParams } from 'react-router-dom';

const Article: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  window.console.log(articleId, 'article id');
  return <div>Article Page</div>;
};

export default Article;

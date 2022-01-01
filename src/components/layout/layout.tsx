import * as React from 'react';
import { useParams } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  const { articleId } = useParams<{ articleId: string }>();

  const [test, setTest] = React.useState(false);
  window.console.log(test, 'Rendering: Layout');

  React.useEffect(() => {
    window.console.log('component did mount trigger');
    setTest(true);
  }, []);

  React.useEffect(() => {
    window.console.log('component did update trigger', articleId);
  }, [articleId]);
  return <main className="border-4">{children}</main>;
};

export { Layout };

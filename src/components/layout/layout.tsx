import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'src/graphql/query/users';

const Layout: React.FC = ({ children }) => {
  const { articleId } = useParams<{ articleId: string }>();

  const [test, setTest] = React.useState(false);
  window.console.log(test, 'Rendering: Layout');

  React.useEffect(() => {
    window.console.log('component did mount trigger');
    setTest(true);
  }, []);

  const { data } = useQuery(GET_USERS);

  window.console.log(data, 'data');

  React.useEffect(() => {
    window.console.log('component did update trigger', articleId);
  }, [articleId]);
  return <main className="border-4">{children}</main>;
};

export { Layout };

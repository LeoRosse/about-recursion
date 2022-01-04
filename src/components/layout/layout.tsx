import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'src/graphql/query/users';
import Sidebar from '../sidebar/sidebar';

const Layout: React.FC = ({ children }) => {
  const [test, setTest] = React.useState(false);
  window.console.log(test, 'Rendering: Layout');

  React.useEffect(() => {
    window.console.log('component did mount trigger');
    setTest(true);
  }, []);

  const { data } = useQuery(GET_USERS);

  window.console.log(data, 'data');

  // React.useEffect(() => {
  //   window.console.log('component did update trigger', articleId);
  // }, [articleId]);
  return (
    <main className="bg-grey flex flex-col items-center justify-center min-h-screen py-2">
      <Sidebar />
      {children}
    </main>
  );
};

export { Layout };

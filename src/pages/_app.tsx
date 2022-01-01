import * as React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';

interface AppProps {}

const GetLayout: React.FC = () => {
  window.console.log('mi sto renderizzando GetLayout');
  const Element = useOutlet();
  const getLayout = Element?.props.children.props.children.type.getLayout || ((page: React.ReactNode) => page);
  return getLayout(<Outlet />);
};

const App: React.FC<AppProps> = () => {
  window.console.log('mi sto renderizzando App');
  // put some logic here, maybe authentication
  return <GetLayout />;
};

export default App;

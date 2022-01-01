import * as React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';

interface AppProps {}

const GetLayout: React.FC = () => {
  window.console.log('Rendering: GetLayout');
  const Element = useOutlet();
  // https://reactjs.org/docs/reconciliation.html
  const getLayout = Element?.props.children.props.children.type.getLayout || ((page: React.ReactElement) => page);
  return getLayout(<Outlet />);
};

const App: React.FC<AppProps> = () => {
  window.console.log('Rendering: App');
  // put some logic here, maybe authentication
  return <GetLayout />;
};

export default App;

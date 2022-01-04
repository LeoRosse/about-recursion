import * as React from 'react';
import { Outlet } from 'react-location';
import { routes } from 'src/routes';
import { getMatchingRoute } from 'src/utility/get-matching-route';

interface AppProps {}

const GetLayout: React.FC = () => {
  window.console.log('Rendering: GetLayout');
  const pathname = window.location.pathname;
  const route = getMatchingRoute(pathname, routes);

  // https://reactjs.org/docs/reconciliation.html
  const getLayout = route?.layout || ((page: React.ReactElement) => page);
  return getLayout(<Outlet />);
};

const App: React.FC<AppProps> = () => {
  window.console.log('Rendering: App');
  // put some logic here, maybe authentication
  return <GetLayout />;
};

export default App;

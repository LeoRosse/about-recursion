import { SyncOrAsyncElement } from 'react-location';
import { Layout } from './layout';

interface Route {
  path: string;
  element: SyncOrAsyncElement;
  layout?: Layout;
}

export { Route };

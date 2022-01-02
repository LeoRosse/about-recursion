import { Layout } from './layout';

interface Route {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<{}>>;
  layout: Layout;
  preload: () => Promise<{
    default: React.ComponentType<{}>;
  }>;
}

export { Route };

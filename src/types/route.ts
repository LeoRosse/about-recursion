interface Route {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<{}>>;
  preload: () => Promise<{
    default: React.ComponentType<{}>;
  }>;
}

export { Route };

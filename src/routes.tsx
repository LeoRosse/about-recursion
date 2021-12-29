import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requirePages = require.context('./pages', true, /.tsx$/);

// this function returns charts based on the own ids. The filename MUST match with the id on payloads.
const returnRoutes = (): JSX.Element => {
  const ROUTES = requirePages
    .keys()
    .reduce<{ [key: string]: React.ComponentType }>(
      (acc, curr) => ({ ...acc, [curr]: requirePages(curr).default }),
      {},
    );
  const routes = Object.keys(ROUTES).map((route) => {
    const path = route
      .replace(/\.|index|tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[(.+)\]/, ':$1');

    return { path, component: ROUTES[route] };
  });

  return (
    <Routes>
      {routes.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export { returnRoutes };

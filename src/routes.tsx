import * as React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requirePages = require.context('./pages', true, /.tsx$/);
const requirePreserved = require.context('./pages', true, /_app.tsx|404.tsx$/);

// this function returns charts based on the own ids. The filename MUST match with the id on payloads.
const Routes: React.FC = () => {
  const ROUTES = requirePages
    .keys()
    .reduce<{ [key: string]: React.ComponentType }>(
      (acc, curr) => ({ ...acc, [curr]: requirePages(curr).default }),
      {},
    );

  const PRESERVED = requirePreserved
    .keys()
    .reduce<{ [key: string]: React.ComponentType }>(
      (acc, curr) => ({ ...acc, [curr]: requirePreserved(curr).default }),
      {},
    );

  const routes = Object.keys(ROUTES).map((route) => {
    const path = route
      .replace(/\.|index|tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[(.+)\]/, ':$1');

    return { path, component: ROUTES[route] };
  });

  const preserved = Object.keys(PRESERVED).reduce<{ [key: string]: React.ComponentType }>((acc, file) => {
    const key = file.replace(/\.\/|.tsx$/g, '');
    return { ...acc, [key]: PRESERVED[file] };
  }, {});

  const App = preserved['_app'];
  const NotFound = preserved['404'];

  return (
    <App>
      <BrowserRoutes>
        {routes.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
    </App>
  );
};

export { Routes };

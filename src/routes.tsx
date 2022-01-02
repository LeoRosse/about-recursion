import * as React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import { Spinner } from './components/spinner/spinner';
import { LAYOUT_KEY } from './constants/layout-key';
import { Layout } from './types';

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requirePages = require.context('./pages', true, /.tsx$/, 'lazy');
const requirePagesSync = require.context('./pages', true, /.tsx$/);
const requirePreserved = require.context('./pages', true, /_app.tsx|404.tsx$/);

const PAGES_KEYS = requirePages.keys();
const PRESERVED_KEYS = requirePreserved.keys();

const ROUTES = PAGES_KEYS.filter((el) => !PRESERVED_KEYS.includes(el)).reduce<{
  [key: string]: () => Promise<{ default: React.ComponentType }>;
}>((acc, curr) => ({ ...acc, [curr]: () => requirePages(curr) }), {});

const ROUTES_LAYOUT = PAGES_KEYS.filter((el) => !PRESERVED_KEYS.includes(el)).reduce<{
  [key: string]: Layout;
}>((acc, curr) => ({ ...acc, [curr]: requirePagesSync(curr).default[LAYOUT_KEY] }), {});

const PRESERVED = PRESERVED_KEYS.reduce<{ [key: string]: React.ComponentType }>(
  (acc, curr) => ({ ...acc, [curr]: requirePreserved(curr).default }),
  {},
);

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\.|\/index|tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: React.lazy(ROUTES[route]), layout: ROUTES_LAYOUT[route], preload: ROUTES[route] };
});

const preserved = Object.keys(PRESERVED).reduce<{ [key: string]: React.ComponentType }>((acc, file) => {
  const key = file.replace(/\.\/|.tsx$/g, '');
  return { ...acc, [key]: PRESERVED[file] };
}, {});

const Routes: React.FC = () => {
  const App = preserved['_app'];
  const NotFound = preserved['404'];

  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRoutes>
        <Route element={<App />}>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </BrowserRoutes>
    </React.Suspense>
  );
};

export { Routes, routes };

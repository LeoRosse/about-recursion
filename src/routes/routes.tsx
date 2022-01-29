import * as React from 'react';
import { DefaultGenerics, LoaderFn, LoaderFnOptions, ReactLocation, RouteMatch, Router } from 'react-location';
import { LAYOUT_KEY } from '../constants/layout-key';
import { Layout, Route } from '../types';

// https://webpack.js.org/guides/dependency-management/#context-module-api
const requirePages = require.context('../pages', true, /.tsx$/, 'lazy');
const requirePagesSync = require.context('../pages', true, /.tsx$/);
const requirePreserved = require.context('../pages', true, /_app.tsx|404.tsx$/);

const PAGES_KEYS = requirePages.keys();
const PRESERVED_KEYS = requirePreserved.keys();

const ROUTES = PAGES_KEYS.filter((el) => !PRESERVED_KEYS.includes(el)).reduce<{
  [key: string]: () => Promise<{ default: React.ComponentType; loader: LoaderFn }>;
}>((acc, curr) => ({ ...acc, [curr]: () => requirePages(curr) }), {});

const ROUTES_LAYOUT = PAGES_KEYS.filter((el) => !PRESERVED_KEYS.includes(el)).reduce<{
  [key: string]: Layout;
}>((acc, curr) => ({ ...acc, [curr]: requirePagesSync(curr).default[LAYOUT_KEY] }), {});

const PRESERVED = PRESERVED_KEYS.reduce<{ [key: string]: React.ComponentType }>(
  (acc, curr) => ({ ...acc, [curr]: requirePreserved(curr).default }),
  {},
);

const regularRoutes = Object.keys(ROUTES).map((key) => {
  const route = ROUTES[key];
  const path = key
    .replace(/\.\/index.tsx$/g, '/')
    .replace(/\.|\/index|tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return {
    path,
    element: () => route().then((mod) => <mod.default />),
    layout: ROUTES_LAYOUT[key],
    loader: (...args: [RouteMatch<DefaultGenerics>, LoaderFnOptions]) => route().then((mod) => mod?.loader?.(...args)),
  };
});

const preserved = Object.keys(PRESERVED).reduce<{ [key: string]: React.ComponentType }>((acc, file) => {
  const key = file.replace(/\.\/|.tsx$/g, '');
  return { ...acc, [key]: PRESERVED[file] };
}, {});

const App = preserved['_app'];
const NotFound = preserved['404'];

const location = new ReactLocation();
const routes: Route[] = [...regularRoutes, { path: '*', element: <NotFound /> }];

const Routes: React.FC = () => {
  return (
    <Router location={location} routes={routes}>
      <App />
    </Router>
  );
};

export { Routes, routes };

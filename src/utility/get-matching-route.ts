import { Route } from 'src/types';

const getMatchingRoute = (path: string, routes: Route[]): Route | undefined => {
  const routeDynamicSegments = /:\w+|\*/g;
  return routes.find((route) => path.match(new RegExp(route.path.replace(routeDynamicSegments, '.*')))?.[0] === path);
};

export { getMatchingRoute };

import * as React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { getMatchingRoute } from 'src/utility/get-matching-route';
import { routes } from 'src/routes';

type Props = LinkProps & { prefetch?: boolean; to: string };

export const Link = ({ children, to, prefetch = true, ...props }: Props) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const [prefetched, setPrefetched] = React.useState(false);

  const route = React.useMemo(() => getMatchingRoute(to, routes), [to]);

  const preload = React.useCallback(() => route?.preload() && setPrefetched(true), [route]);
  const prefetchable = Boolean(route && !prefetched);

  const handleMouseEnter = () => prefetchable && preload();

  React.useEffect(() => {
    if (!prefetchable || !prefetch || !ref?.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && preload()),
      { rootMargin: '200px' },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefetch, prefetchable, preload]);

  return (
    <RouterLink onMouseEnter={handleMouseEnter} ref={ref} to={to} {...props}>
      {children}
    </RouterLink>
  );
};

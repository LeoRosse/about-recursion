import * as React from 'react';
import { Link } from 'src/components/link';

const NotFound: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div>
      <h1 className="font-mono text-2xl">/404</h1>
      <div>
        <p className="mt-4 text-lg">page not found</p>
        <Link className="mt-4 p-2 hover:underline" to="/">
          go home
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;

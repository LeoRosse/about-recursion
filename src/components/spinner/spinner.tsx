import * as React from 'react';

const Spinner: React.FC = () => (
  <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export { Spinner };

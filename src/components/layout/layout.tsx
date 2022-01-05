import * as React from 'react';
import Sidebar from '../sidebar/sidebar';

const Layout: React.FC = ({ children }) => {
  window.console.log('Rendering: Layout');

  return (
    <main className="bg-grey flex flex-col items-center justify-center min-h-screen py-2">
      <Sidebar />
      {children}
    </main>
  );
};

export { Layout };

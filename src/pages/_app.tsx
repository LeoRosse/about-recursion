import * as React from 'react';

const App: React.FC = ({ children }) => {
  // put some logic here, maybe authentication
  return <div className="h-screen">{children}</div>;
};

export default App;

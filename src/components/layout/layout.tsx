import * as React from 'react';

const Layout: React.FC = ({ children }) => {
  const [test, setTest] = React.useState(false);
  console.log(test, 'Rendering: Layout');

  React.useEffect(() => {
    window.console.log('component did mount trigger');
    setTest(true);
  }, []);
  return <main className="border-4">{children}</main>;
};

export { Layout };

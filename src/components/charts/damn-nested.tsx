import * as React from "react";

const DamnNested: React.FC = () => {
  const [test, setTest] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 3000);
  }, []);

  window.console.log(test, "[LOG] damn nested");
  return <div>Damn Nested</div>;
};

export { DamnNested };

import * as React from 'react';

interface RefContextInterface {
  divRef: React.RefObject<HTMLDivElement> | null;
}

export const RefContext = React.createContext<RefContextInterface>({
  divRef: null,
});

const RefProvider: React.FC = ({ children }) => {
  const divRef = React.useRef(null);

  return <RefContext.Provider value={{ divRef }}>{children}</RefContext.Provider>;
};

export { RefProvider };

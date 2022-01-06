import * as React from 'react';
import { RefContextInterface } from 'src/types';

export const RefContext = React.createContext<RefContextInterface>({
  divRef: null,
});

const RefProvider: React.FC = ({ children }) => {
  const divRef = React.useRef(null);

  return <RefContext.Provider value={{ divRef }}>{children}</RefContext.Provider>;
};

export { RefProvider };

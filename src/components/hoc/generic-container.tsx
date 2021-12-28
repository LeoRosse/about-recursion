import React from 'react';

import { RefContext } from '../../providers/ref-provider';

interface GenericContainerProps {
  containerId: string;
}

const GenericContainer: React.FC<GenericContainerProps> = ({ children, containerId }) => {
  const ref = React.useContext(RefContext);

  return (
    <div id={containerId} ref={ref.divRef}>
      {children}
    </div>
  );
};

export { GenericContainer };

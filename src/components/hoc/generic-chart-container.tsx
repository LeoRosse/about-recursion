import React from 'react';

import { RefContext } from '../../providers/ref-provider';

interface GenericChartContainerProps {
  containerId: string;
}

const GenericChartContainer: React.FC<GenericChartContainerProps> = ({ children, containerId }) => {
  const ref = React.useContext(RefContext);

  return (
    <div id={containerId} ref={ref.divRef}>
      {children}
    </div>
  );
};

export { GenericChartContainer };

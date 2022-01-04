import React from 'react';
import { Container } from 'src/types';

import { RefContext } from '../../providers/ref-provider';

interface GenericContainerProps {
  container: Container;
}

const GenericContainer: React.FC<GenericContainerProps> = ({ children, container }) => {
  const ref = React.useContext(RefContext);

  return (
    <div
      id={container.containerInfo.id}
      ref={ref.divRef}
      className={`${
        !container.metadata?.actions?.length ? '' : 'border-4 p-4 shadow-md'
      } rounded-lg gap-4 grid grid-cols-${container.containerInfo.cols} grid-rows-${
        container.containerInfo.rows
      } grid-flow-row`}
      // className={`${
      //   !container.metadata?.actions?.length ? '' : 'border-4 p-4 shadow-md rounded-lg'
      // } gap-4 justify-center ${container.containerInfo.display === 'flex' ? 'flex flex-wrap' : 'block'}`}
    >
      {children}
    </div>
  );
};

export { GenericContainer };

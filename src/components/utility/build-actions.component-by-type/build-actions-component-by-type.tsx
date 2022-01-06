import * as React from 'react';
import { RefContext } from 'src/providers/ref-provider';
import { useAppSelector } from 'src/store/hooks';
import { MetadataAction } from 'src/types/metadata-action';
import { mapActionsToComponent, mapOnClick } from './business-logic';

interface BuildActionsComponentByTypeProps {
  actions: MetadataAction[] | undefined;
  containerId: string;
}

const BuildActionsComponentByType: React.FC<BuildActionsComponentByTypeProps> = ({ actions, containerId }) => {
  const ref = React.useContext(RefContext);
  const dataSet = useAppSelector((state) => state.data.dataSet);

  return (
    <div className="flex">
      {actions?.map((action) => {
        const Component = mapActionsToComponent[action.types];
        return (
          <div key={action.types}>
            <Component
              values={action.values.map((value) => ({
                label: value,
                onClick: mapOnClick(containerId, dataSet, ref)[value],
              }))}
            />
          </div>
        );
      })}
    </div>
  );
};

export { BuildActionsComponentByType };

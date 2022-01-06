import * as React from 'react';
import { useDispatch } from 'react-redux';
import { RefContext } from 'src/providers/ref-provider';
// import { useAppSelector } from 'src/store/hooks';
import { MetadataAction } from 'src/types/metadata-action';
import { mapActionsToComponent, mapOnClick } from './business-logic';

interface BuildActionsComponentByTypeProps {
  actions: MetadataAction[] | undefined;
  containerId: string;
}

const BuildActionsComponentByType: React.FC<BuildActionsComponentByTypeProps> = ({ actions, containerId }) => {
  const ref = React.useContext(RefContext);
  const dispatch = useDispatch();
  window.console.log('Rendering BuildActionsComponentByType', containerId);

  return (
    <div className="flex">
      {actions?.map((action) => {
        const Component = mapActionsToComponent[action.types];
        return (
          <div key={action.types}>
            <Component
              containerId={containerId}
              values={action.values.map((value) => ({
                label: value,
                onClick: mapOnClick(containerId, dispatch, ref)[value],
              }))}
            />
          </div>
        );
      })}
    </div>
  );
};

export { BuildActionsComponentByType };

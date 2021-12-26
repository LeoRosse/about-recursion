import * as React from 'react';
import { RefContext } from '../../providers/ref-provider';
import { useAppSelector } from '../../store/hooks';
import { ComponentActionsProps } from '../../types/component-actions-props';
import { MetadataAction } from '../../types/metadata-action';
import { Dropdown } from '../dropdown/dropdown';

interface BuildActionsComponentByTypeProps {
  actions: MetadataAction[];
}

const BuildActionsComponentByType: React.FC<BuildActionsComponentByTypeProps> = ({ actions }) => {
  const ref = React.useContext(RefContext);
  const dataSet = useAppSelector((state) => state.data.dataSet);
  const mapActionsToComponent: Record<string, React.ComponentType<ComponentActionsProps>> = {
    export: Dropdown,
  };
  const mapOnClick: Record<string, () => void> = {
    image: () => window.console.log(`onClick for value: image`, ref),
    svg: () => window.console.log(`onClick for value: svg`),
    xls: () => window.console.log(`onClick for value:`, dataSet),
  };
  return (
    <div className="flex">
      {actions.map((action) => {
        const Component = mapActionsToComponent[action.types];
        return (
          <div key={action.types}>
            <Component
              values={action.values.map((value) => ({
                label: value,
                onClick: mapOnClick[value],
              }))}
            />
          </div>
        );
      })}
    </div>
  );
};

export { BuildActionsComponentByType };

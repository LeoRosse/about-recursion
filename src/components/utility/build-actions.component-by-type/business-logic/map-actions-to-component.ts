import { Dropdown } from 'src/components/dropdown/dropdown';
import { ComponentActionsProps } from 'src/types';

const mapActionsToComponent: Record<string, React.ComponentType<ComponentActionsProps>> = {
  export: Dropdown,
};

export { mapActionsToComponent };

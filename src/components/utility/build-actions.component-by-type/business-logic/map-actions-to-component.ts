import { ChartType } from 'src/components/chart-type/chart-type';
import { Dropdown } from 'src/components/dropdown/dropdown';
import { ComponentActionsProps } from 'src/types';

const mapActionsToComponent: Record<string, React.ComponentType<ComponentActionsProps>> = {
  export: Dropdown,
  chartType: ChartType,
};

export { mapActionsToComponent };

import { Chart } from "./chart";
import { MetadataAction } from "./metadata-action";

export interface Container {
  readonly containerInfo: {
    readonly id: string;
    readonly title: string;
    readonly children?: (Container | Chart)[];
  };
  readonly metadata?: {
    readonly actions?: MetadataAction[];
  };
}

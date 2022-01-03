import { Chart } from './chart';
import { Display } from './display';
import { MetadataAction } from './metadata-action';

export interface Container {
  readonly containerInfo: {
    readonly id: string;
    readonly title?: string;
    readonly cols?: number;
    readonly rows?: number;
    readonly display?: Display;
    readonly children?: (Container | Chart)[];
  };
  readonly metadata?: {
    readonly actions?: MetadataAction[];
    readonly relatedActions?: MetadataAction[];
    readonly containerBox?: boolean;
  };
}

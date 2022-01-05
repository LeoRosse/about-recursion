import { MetadataAction } from '.';

export interface Chart {
  readonly chartInfo: {
    readonly id: string;
    readonly title: string;
    readonly row?: number;
    readonly col?: number;
  };
  readonly metadata?: {
    readonly actions?: MetadataAction[];
    readonly relatedActions?: MetadataAction[];
  };
}

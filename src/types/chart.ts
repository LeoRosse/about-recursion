export interface Chart {
  readonly chartInfo: {
    readonly id: string;
    readonly title: string;
    readonly row?: number;
    readonly col?: number;
  };
}

import { Chart } from "./chart";

export interface Container {
  readonly containerInfo: {
    readonly id: string;
    readonly title: string;
    readonly children?: Container[] | Chart[];
  };
}

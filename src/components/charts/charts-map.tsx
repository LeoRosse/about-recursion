import * as React from "react";
import { DamnNested } from "./damn-nested";
import { FirstChart } from "./first-chart";
import { SecondChart } from "./second-chart";

const chartsMap = {
  "first-chart": <FirstChart />,
  "second-chart": <SecondChart />,
  "damn-nested": <DamnNested />,
};

export { chartsMap };

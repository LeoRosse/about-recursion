import * as React from "react";
import { DamnNested } from "./damn-nested";
import { FirstChart } from "./first-chart";
import { SecondChart } from "./second-chart";
import { SuperNested } from "./super-nested";

const chartsMap = {
  "first-chart": <FirstChart />,
  "second-chart": <SecondChart />,
  "damn-nested": <DamnNested />,
  "super-nested": <SuperNested />,
};

export { chartsMap };

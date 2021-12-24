import * as React from 'react';
import { DamnNested } from './damn-nested';
import { FirstChart } from './first-chart';
import { FivthChart } from './fivth-chart';
import { FourthChart } from './fourth-chart';
import { SecondChart } from './second-chart';
import { SuperNested } from './super-nested';
import { ThirdChart } from './third-chart';

const chartsMap = {
  'first-chart': <FirstChart />,
  'second-chart': <SecondChart />,
  'damn-nested': <DamnNested />,
  'super-nested': <SuperNested />,
  'third-chart': <ThirdChart />,
  'fourth-chart': <FourthChart />,
  'fivth-chart': <FivthChart />,
};

export { chartsMap };

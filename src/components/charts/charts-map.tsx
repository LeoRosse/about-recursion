import * as React from 'react';
import DamnNested from './damn-nested';
import FirstChart from './first-chart';
import FivthChart from './fivth-chart';
import FourthChart from './fourth-chart';
import SecondChart from './second-chart';
import SuperNested from './super-nested';
import ThirdChart from './third-chart';

const chartsMap = {
  'first-chart': <FirstChart id="first-chart" />,
  'second-chart': <SecondChart />,
  'damn-nested': <DamnNested />,
  'super-nested': <SuperNested id="super-nested" />,
  'third-chart': <ThirdChart />,
  'fourth-chart': <FourthChart id="fourth-chart" />,
  'fivth-chart': <FivthChart />,
};

export { chartsMap };

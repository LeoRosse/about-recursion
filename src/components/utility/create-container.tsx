import * as React from 'react';
import { Container } from '../../types';
import { Chart } from '../../types/chart';
import { isContainer } from '../../types/is-container';

const createContainer = (
  createComponent: (container: Container | Chart) => JSX.Element,
  elements: (Container | Chart)[],
) =>
  elements.reduce<JSX.Element[]>((acc, curr) => {
    if (isContainer(curr)) return [...acc, <div key={curr.containerInfo.id}>{createComponent(curr)}</div>];
    return acc;
  }, []);

export { createContainer };

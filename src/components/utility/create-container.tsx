import * as React from 'react';
import { Container } from '../../types';
import { Chart } from '../../types/chart';
import { isContainer } from '../../types/is-container';
import { DraggableList } from '../draggable-list/draggable-list';

const createContainer = (
  createComponent: (container: Container | Chart) => JSX.Element | null,
  elements: (Container | Chart)[] | undefined,
): JSX.Element[] | undefined => {
  return elements?.reduce<JSX.Element[]>((acc, curr) => {
    if (isContainer(curr)) return [...acc, <DraggableList container={curr} createComponent={createComponent} />];
    return acc;
  }, []);
};

export { createContainer };

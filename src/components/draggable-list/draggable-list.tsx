import * as React from 'react';
import { useAppSelector } from 'src/store/hooks';
import { Container } from 'src/types';
import { Chart } from 'src/types/chart';
import { isContainer } from 'src/types/is-container';
import { DragNDrop } from '../drag-n-drop/drag-n-drop';

interface DraggableListProps {
  container: Container;
  createComponent: (container: Container | Chart) => JSX.Element | null;
}

const DraggableList: React.FC<DraggableListProps> = ({ container, createComponent }) => {
  const list = useAppSelector((state) => state.dragNDrop.dragItems[container.containerInfo.id]);

  const dragItemNode = React.useRef<EventTarget | null>();
  const dragItem = React.useRef<{ itemI: number } | null>();

  return (
    <>
      {list?.map((child: Container | Chart, containerIndex: number) => (
        <DragNDrop
          dragItemNode={dragItemNode}
          dragItem={dragItem}
          key={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}
          id={isContainer(child) ? child.containerInfo.id : child.chartInfo.id}
          containerId={container.containerInfo.id}
          itemI={containerIndex}
        >
          {createComponent(child)}
        </DragNDrop>
      ))}
    </>
  );
};

export { DraggableList };

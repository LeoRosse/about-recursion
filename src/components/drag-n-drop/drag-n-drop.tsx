import * as React from 'react';
import { useAppDispatch } from 'src/store/hooks';
import { updateDragItems } from 'src/store/slices/drag-n-drop.slice';

interface DragNDropProps {
  containerId: string;
  dragItemNode: React.MutableRefObject<EventTarget | null | undefined>;
  dragItem: React.MutableRefObject<
    | {
        itemI: number;
      }
    | null
    | undefined
  >;
  id: string;
  itemI: number;
}

const DragNDrop: React.FC<DragNDropProps> = ({ children, dragItemNode, dragItem, containerId, id, itemI }) => {
  const dispatch = useAppDispatch();
  const [dragging, setDragging] = React.useState(false);

  const handletDragStart = (evt: React.DragEvent<HTMLDivElement>, item: { itemI: number }) => {
    dragItemNode.current = evt.target;
    dragItemNode.current.addEventListener('dragend', handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (evt: React.DragEvent<HTMLDivElement>, targetItem: { itemI: number }) => {
    if (dragItemNode.current !== evt.target) {
      if (dragItem && dragItem.current)
        dispatch(updateDragItems({ containerId, from: dragItem.current.itemI, to: targetItem.itemI }));
      dragItem.current = targetItem;
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (dragItem) dragItem.current = null;
    if (dragItemNode && dragItemNode.current) {
      dragItemNode.current.removeEventListener('dragend', handleDragEnd);
      dragItemNode.current = null;
    }
  };

  const getStyles = (item: { itemI: number }) => {
    if (dragItem?.current?.itemI === item.itemI) {
      return 'current';
    }
    return '';
  };

  return (
    <div
      draggable
      onDragStart={(e) => handletDragStart(e, { itemI })}
      onDragEnter={(e) => handleDragEnter(e, { itemI })}
      id={id}
      className={dragging ? getStyles({ itemI }) : 'dnd-item'}
    >
      {children}
    </div>
  );
};

export { DragNDrop };

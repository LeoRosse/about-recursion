interface DraggableBag {
  draggable: boolean;
  dragging: boolean;
  handletDragStart: (
    evt: React.DragEvent<HTMLDivElement>,
    item: {
      itemI: number;
    },
  ) => void;
  handleDragEnter: (
    evt: React.DragEvent<HTMLDivElement>,
    targetItem: {
      itemI: number;
    },
  ) => void;
  handleDragEnd: () => void;
  itemI: number;
  getStyles: (item: { itemI: number }) => 'current' | '';
}

export { DraggableBag };

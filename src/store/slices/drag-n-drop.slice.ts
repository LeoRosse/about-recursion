import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Container } from 'src/types/container';
import { Chart } from 'src/types/chart';

export interface DragNDropSliceState {
  dragItems: Record<string, (Container | Chart)[] | undefined>;
}

const initialState: DragNDropSliceState = { dragItems: {} };

export const dragNDropSlice = createSlice({
  name: 'dragNDrop',
  initialState,
  reducers: {
    inizializeDragItems: (state, action: PayloadAction<Container>) => {
      state.dragItems = {
        ...state.dragItems,
        [action.payload.containerInfo.id]: action.payload.containerInfo.children,
      };
    },
    updateDragItems: (state, action: PayloadAction<{ containerId: string; from: number; to: number }>) => {
      // state.dragItems[action.payload.containerId]?.splice(
      //   action.payload.to,
      //   0,
      //   state.dragItems[action.payload.containerId]?.splice(action.payload.from, 1)[0]!,
      // );
      // window.console.log(state.dragItems[action.payload.containerId], 'updatedChildren');
      const movedItem =
        state.dragItems[action.payload.containerId]?.filter((_, index) => index === action.payload.from) || [];
      const remainingItems =
        state.dragItems[action.payload.containerId]?.filter((_, index) => index !== action.payload.from) || [];

      const reorderedItems = [
        ...remainingItems?.slice(0, action.payload.to),
        movedItem[0],
        ...remainingItems?.slice(action.payload.to),
      ];
      state.dragItems = {
        ...state.dragItems,
        [action.payload.containerId]: reorderedItems,
      };
    },
  },
});

export const { inizializeDragItems, updateDragItems } = dragNDropSlice.actions;

export const dataSliceReducer = dragNDropSlice.reducer;

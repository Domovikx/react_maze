import { createSelector } from 'reselect';
import { RootState } from 'store/root.reducer';

const gameStepsData = (state: RootState) => state.gameData.gameStepsData;

export const selectFirstCell = createSelector(
  gameStepsData,
  (items) => items[0],
);

export const selectFinishCell = createSelector(
  gameStepsData,
  (items) => items[items.length - 1],
);

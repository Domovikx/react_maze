import { createSelector } from 'reselect';
import { RootState } from 'store/root.reducer';

const gameStepsData = (state: RootState) => state.gameData.gameStepsData;

const gamePhase = (state: RootState) => state.gameData.gamePhase;

export const selectFirstCell = createSelector(
  gameStepsData,
  (items) => items[0],
);

export const selectFinishCell = createSelector(
  gameStepsData,
  (items) => items[items.length - 1],
);

export const selectGamePhase = createSelector(
  gamePhase,
  (gamePhase) => gamePhase,
);

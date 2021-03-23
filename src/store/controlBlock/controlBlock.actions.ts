import { CONTROL_BLOCK } from './controlBlock.types';

export const setColumnsAction = (value: string) => ({
  payload: { value },
  type: CONTROL_BLOCK.SET_COLUMNS,
});

export const setLinesAction = (value: string) => ({
  payload: { value },
  type: CONTROL_BLOCK.SET_LINES,
});

export const setStepsAction = (value: string) => ({
  payload: { value },
  type: CONTROL_BLOCK.SET_STEPS,
});

export const startGameAction = () => ({
  type: CONTROL_BLOCK.START_GAME,
});

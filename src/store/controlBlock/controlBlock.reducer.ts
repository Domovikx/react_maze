import {
  ControlBlockAction,
  ControlBlockState,
  CONTROL_BLOCK,
} from './controlBlock.types';

export const controlBlockState: ControlBlockState = {
  columns: '3',
  lines: '3',
  steps: '10',
};

export const controlBlockReducer = (
  state = controlBlockState,
  { type, payload }: ControlBlockAction,
): ControlBlockState => {
  switch (type) {
    case CONTROL_BLOCK.SET_COLUMNS:
      return { ...state, columns: payload.value };

    case CONTROL_BLOCK.SET_LINES:
      return { ...state, lines: payload.value };

    case CONTROL_BLOCK.SET_STEPS:
      return { ...state, steps: payload.value };

    default:
      return state;
  }
};

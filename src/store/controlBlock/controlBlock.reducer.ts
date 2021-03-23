import { CONTROL_BLOCK } from './controlBlock.types';

export const controlBlockState = {
  columns: '3',
  lines: '3',
  steps: '10',
};

const handlers = {
  [CONTROL_BLOCK.SET_COLUMNS]: (state, { payload }) => ({
    ...state,
    columns: payload.value,
  }),

  [CONTROL_BLOCK.SET_LINES]: (state, { payload }) => ({
    ...state,
    lines: payload.value,
  }),

  [CONTROL_BLOCK.SET_STEPS]: (state, { payload }) => ({
    ...state,
    steps: payload.value,
  }),

  DEFAULT: (state) => state,
};

export const controlBlockReducer = (state = controlBlockState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

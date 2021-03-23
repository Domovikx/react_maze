export enum CONTROL_BLOCK {
  SET_COLUMNS = 'CONTROL_BLOCK.SET_COLUMNS',
  SET_LINES = 'CONTROL_BLOCK.SET_LINES',
  SET_STEPS = 'CONTROL_BLOCK.SET_STEPS',
  START_GAME = 'CONTROL_BLOCK.START_GAME',
}

export interface ControlBlockState {
  columns: string;
  lines: string;
  steps: string;
}

export type ControlBlockAction =
  | {
      type: CONTROL_BLOCK.SET_COLUMNS;
      payload: {
        value: string;
      };
    }
  | {
      type: CONTROL_BLOCK.SET_LINES;
      payload: {
        value: string;
      };
    }
  | {
      type: CONTROL_BLOCK.SET_STEPS;
      payload: {
        value: string;
      };
    }
  | {
      type: CONTROL_BLOCK.START_GAME;
      payload: any;
    };

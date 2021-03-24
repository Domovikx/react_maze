export enum CONTROL_BLOCK {
  SET_COLUMNS = 'CONTROL_BLOCK.SET_COLUMNS',
  SET_LINES = 'CONTROL_BLOCK.SET_LINES',
  SET_STEPS = 'CONTROL_BLOCK.SET_STEPS',
}

export interface ControlBlockState {
  columns: string;
  lines: string;
  steps: string;
}

export type ControlBlockAction =
  | {
      type: CONTROL_BLOCK.SET_COLUMNS;
      payload: Payload;
    }
  | {
      type: CONTROL_BLOCK.SET_LINES;
      payload: Payload;
    }
  | {
      type: CONTROL_BLOCK.SET_STEPS;
      payload: Payload;
    };

export interface Payload {
  value?: string;
}

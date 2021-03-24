export enum GAME_DATA {
  SET_GAME_STEPS_DATA = 'GAME_DATA.SET_GAME_STEPS_DATA',
  SET_GAME_PHASE = 'GAME_DATA.SET_GAME_PHASE',
}

export interface GameDataState {
  gameStepsData: GameStepsData;
  gamePhase: string;
}

export type GameStepsData = {
  row: number;
  col: number;
  direction: string;
}[];

export enum GAME_PHASES {
  IN_PROGRESS = 'GAME_PHASES.IN_PROGRESS',
  FINISH = 'GAME_PHASES.FINISH',
}

export type GameDataAction =
  | {
      type: GAME_DATA.SET_GAME_STEPS_DATA;
      payload: Payload;
    }
  | {
      type: GAME_DATA.SET_GAME_PHASE;
      payload: Payload;
    };

export interface Payload {
  gameStepsData?: GameStepsData;
  gamePhase?: GAME_PHASES.FINISH | GAME_PHASES.IN_PROGRESS;
}

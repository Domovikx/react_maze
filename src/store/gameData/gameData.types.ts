export enum GAME_DATA {
  SET_GAME_STEPS_DATA = 'GAME_DATA.SET_GAME_STEPS_DATA',
}

export interface GameDataState {
  gameStepsData: GameStepsData;
}

export type GameStepsData = {
  row: number;
  col: number;
  direction: string;
}[];

export type GameDataAction = {
  type: GAME_DATA.SET_GAME_STEPS_DATA;
  payload: {
    gameStepsData: GameStepsData;
  };
};

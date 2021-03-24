import { GameDataAction, GameDataState, GAME_DATA } from './gameData.types';

export const gameDataState: GameDataState = {
  gameStepsData: [],
};

export const gameDataReducer = (
  state = gameDataState,
  { type, payload }: GameDataAction,
): GameDataState => {
  switch (type) {
    case GAME_DATA.SET_GAME_STEPS_DATA:
      return { ...state, gameStepsData: payload.gameStepsData };

    default:
      return state;
  }
};

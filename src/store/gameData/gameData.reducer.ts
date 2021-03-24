import {
  GameDataAction,
  GameDataState,
  GAME_DATA,
  GAME_PHASES,
} from './gameData.types';

export const gameDataState: GameDataState = {
  gameStepsData: [],
  gamePhase: GAME_PHASES.IN_PROGRESS,
};

export const gameDataReducer = (
  state = gameDataState,
  { type, payload }: GameDataAction,
): GameDataState => {
  switch (type) {
    case GAME_DATA.SET_GAME_STEPS_DATA:
      return { ...state, gameStepsData: payload.gameStepsData };

    case GAME_DATA.SET_GAME_PHASE:
      return { ...state, gamePhase: payload.gamePhase };

    default:
      return state;
  }
};

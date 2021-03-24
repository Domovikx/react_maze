import { GameStepsData, GAME_DATA } from './gameData.types';

export const setGameStepsDataAction = (gameStepsData: GameStepsData) => ({
  payload: { gameStepsData },
  type: GAME_DATA.SET_GAME_STEPS_DATA,
});

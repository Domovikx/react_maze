import { GameStepsData, GAME_DATA, GAME_PHASES } from './gameData.types';

export const setGameStepsDataAction = (gameStepsData: GameStepsData) => ({
  payload: { gameStepsData },
  type: GAME_DATA.SET_GAME_STEPS_DATA,
});

export const setGamePhaseAction = (gamePhase: string) => ({
  payload: { gamePhase },
  type: GAME_DATA.SET_GAME_PHASE,
});

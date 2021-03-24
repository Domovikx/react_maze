import { combineReducers } from 'redux';
import { controlBlockReducer } from './controlBlock/controlBlock.reducer';
import { gameDataReducer } from './gameData/gameData.reducer';
import { notifierReducer } from './notifier/notifier.reducer';

export const rootReducer = combineReducers({
  notifier: notifierReducer,
  controlBlock: controlBlockReducer,
  gameData: gameDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

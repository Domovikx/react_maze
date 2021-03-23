import { combineReducers } from 'redux';
import { controlBlockReducer } from './controlBlock/controlBlock.reducer';
import { notifierReducer } from './notifier/notifier.reducer';

export const rootReducer = combineReducers({
  notifier: notifierReducer,
  controlBlock: controlBlockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

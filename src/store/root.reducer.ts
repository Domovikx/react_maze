import { combineReducers } from 'redux';

import { notifierReducer } from './notifier/notifier.reducer';

export const rootReducer = combineReducers({
  notifier: notifierReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

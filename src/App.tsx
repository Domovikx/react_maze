import * as React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './app.styles';
import { rootReducer } from './store/root.reducer';

import ErrorBoundary from './components/common/ErrorBoundary';

export const store = createStore(rootReducer, composeWithDevTools());

export const App = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <CssBaseline />
      <Provider store={store}>
        <div className={classes.container}>
          <div>Лабиринт</div>
          <div>
            <span>Выбрать размер (2 инпута)</span>
            <span>Выбрать количество ходов (1 инпут)</span>
            <span>Старт</span>
          </div>
          <div>Игровое поле</div>
          <div>Поле со стрелками</div>
        </div>
      </Provider>
    </ErrorBoundary>
  );
};

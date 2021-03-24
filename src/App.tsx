import * as React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './app.styles';
import { rootReducer } from './store/root.reducer';

import ErrorBoundary from './components/common/ErrorBoundary';
import MainPlayingField from './components/common/MainPlayingField';
import ArrowField from './components/common/ArrowField';
import Title from './components/common/Title';
import ControlBlock from './components/common/ControlBlock';

export const store = createStore(rootReducer, composeWithDevTools());

export const App = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <CssBaseline />
      <Provider store={store}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <Title />
            <ControlBlock />
            <MainPlayingField />
            <ArrowField />
          </div>
        </div>
      </Provider>
    </ErrorBoundary>
  );
};

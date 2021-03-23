import { useStyles } from './app.styles';
import * as React from 'react';

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>App</div>
    </div>
  );
};

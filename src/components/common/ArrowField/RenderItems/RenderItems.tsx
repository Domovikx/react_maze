import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { useStyles } from './RenderItems.styles';

import { useSelector } from 'react-redux';
import { RootState } from 'store/root.reducer';
import { random } from '../../../../helpers/gameStepsData';
import { uid } from 'uid';

export const RenderItems = () => {
  const classes = useStyles();

  const gameStepsData = useSelector(
    (store: RootState) => store?.gameData?.gameStepsData,
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {gameStepsData.map((item, idx) => {
          return (
            <Grow
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              timeout={random(700, 2500)}
              key={uid(3)}
            >
              <Paper elevation={4} className={classes.paper}>
                {item.direction}
              </Paper>
            </Grow>
          );
        })}
      </div>
    </div>
  );
};

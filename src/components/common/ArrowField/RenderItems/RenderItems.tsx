import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { useStyles } from './RenderItems.styles';

import { useSelector } from 'react-redux';
import { RootState } from 'store/root.reducer';
import { random } from '../../../../helpers/gameStepsData';
import { uid } from 'uid';
import { DIRECTION } from '../../../../helpers/gameStepsData.types';
import { LocationOnIcon, NavigationIcon } from '../../../../assets/Icons';

export const RenderItems = () => {
  const classes = useStyles();

  const gameStepsData = useSelector(
    (store: RootState) => store?.gameData?.gameStepsData,
  );

  return (
    <div className={classes.root}>
      {gameStepsData.map((item) => {
        return (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={random(700, 2500)}
            key={uid(16)}
          >
            <Paper elevation={4} className={classes.paper}>
              {item.direction === DIRECTION.START && <LocationOnIcon />}
              {item.direction === DIRECTION.UP && <NavigationIcon />}
              {item.direction === DIRECTION.RIGHT && (
                <NavigationIcon className={classes.rotateRight} />
              )}
              {item.direction === DIRECTION.DOWN && (
                <NavigationIcon className={classes.rotateDown} />
              )}
              {item.direction === DIRECTION.LEFT && (
                <NavigationIcon className={classes.rotateLeft} />
              )}
            </Paper>
          </Grow>
        );
      })}
    </div>
  );
};

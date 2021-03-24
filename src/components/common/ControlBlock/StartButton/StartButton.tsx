import * as React from 'react';
import { Button } from '@material-ui/core';
import { getGameStepsData } from '../../../../helpers/gameStepsData';
import {
  setGamePhaseAction,
  setGameStepsDataAction,
} from '../../../../store/gameData/gameData.actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/root.reducer';
import { GAME_PHASES } from '../../../../store/gameData/gameData.types';

export const StartButton = () => {
  const dispatch = useDispatch();

  const { columns, lines, steps } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  const handleClick = () => {
    const gameStepsData = getGameStepsData(
      Number(lines),
      Number(columns),
      Number(steps),
    );

    dispatch(setGamePhaseAction(GAME_PHASES.CLEAR));
    dispatch(setGamePhaseAction(GAME_PHASES.IN_PROGRESS));
    dispatch(setGameStepsDataAction(gameStepsData));
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Start
    </Button>
  );
};

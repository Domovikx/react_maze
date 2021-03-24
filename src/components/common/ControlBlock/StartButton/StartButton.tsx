import * as React from 'react';
import { Button } from '@material-ui/core';
import { getGameStepsData } from '../../../../helpers/gameStepsData';
import { setGameStepsDataAction } from '../../../../store/gameData/gameData.actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/root.reducer';

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

    dispatch(setGameStepsDataAction(gameStepsData));
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Start
    </Button>
  );
};

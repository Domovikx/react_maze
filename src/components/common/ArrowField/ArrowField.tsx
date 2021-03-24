import * as React from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameStepsDataAction } from '../../../store/gameData/gameData.actions';
import { RootState } from 'store/root.reducer';
import { getGameStepsData } from '../../../helpers/gameStepsData';
import { GameStepsData } from '../../../store/gameData/gameData.types';
import RenderItems from './RenderItems';

export const ArrowField = () => {
  const dispatch = useDispatch();

  const { columns, lines, steps } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  const initGameSteps: GameStepsData = [];
  const [gameSteps, setGameSteps] = useState(initGameSteps);

  useEffect(() => {
    const gameStepsData = getGameStepsData(
      Number(lines),
      Number(columns),
      Number(steps),
    );

    dispatch(setGameStepsDataAction(gameStepsData));

    setGameSteps(gameStepsData);
  }, [columns, lines, steps]);

  return <RenderItems />;
};

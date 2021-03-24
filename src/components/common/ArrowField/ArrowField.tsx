import * as React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameStepsDataAction } from '../../../store/gameData/gameData.actions';
import { RootState } from 'store/root.reducer';
import { getGameStepsData } from '../../../helpers/gameStepsData';

export const ArrowField = () => {
  const dispatch = useDispatch();

  const { columns, lines, steps } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  // const [body, setBody] = useState([]);

  useEffect(() => {
    const gameStepsData = setGameStepsDataAction(
      getGameStepsData(Number(lines), Number(columns), Number(steps)),
    );

    dispatch(gameStepsData);
  }, [columns, lines, steps]);

  return <>ArrowField</>;
};

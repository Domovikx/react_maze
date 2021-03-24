import * as React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/root.reducer';
import { gameStepsData } from '../../../helpers/gameStepsData';

export const ArrowField = () => {
  const { columns, lines, steps } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  // const [body, setBody] = useState([]);

  useEffect(() => {
    // setBody(() => tableData(Number(lines), Number(columns)));
    console.log(
      'gameStepsData() :>> ',
      gameStepsData(Number(lines), Number(columns), Number(steps)),
    );
  }, [columns, lines, steps]);

  return <>ArrowField</>;
};

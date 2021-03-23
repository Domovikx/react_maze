import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { calculatePlayingField } from '../../../helpers/calculatePlayingField';
import { RootState } from '../../../store/store.types';

export const MainPlayingField = () => {
  const { columns, lines } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  useEffect(() => {
    calculatePlayingField(columns, lines);
  }, [columns, lines]);

  return <>MainPlayingField</>;
};

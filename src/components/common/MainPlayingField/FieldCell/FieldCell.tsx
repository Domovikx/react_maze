import * as React from 'react';
import { Paper } from '@material-ui/core';
import { LocationOnIcon } from '../../../../assets/Icons';
import { useSelector } from 'react-redux';
import {
  selectFinishCell,
  selectFirstCell,
} from '../../../../store/gameData/gameData.selectors';

import { useStyles } from './FieldCell.styles';

export const FieldCell = ({ row, col }) => {
  const classes = useStyles();

  const firstCell = useSelector(selectFirstCell);
  const finishCell = useSelector(selectFinishCell);

  const isFirstCell = row === firstCell.row && col === firstCell.col;
  const isFinishCell = row === finishCell.row && col === finishCell.col;

  const clickHandler = () => {};

  return (
    <Paper elevation={4} className={classes.paper} onClick={clickHandler}>
      {(isFirstCell && (
        <LocationOnIcon color="primary" style={{ fontSize: 40 }} />
      )) ||
        (isFinishCell && <>isFinishCell</>) || <></>}
    </Paper>
  );
};

import * as React from 'react';
import { Paper } from '@material-ui/core';
import { InsertEmoticonIcon, LocationOnIcon } from '../../../../assets/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFinishCell,
  selectFirstCell,
  selectGamePhase,
} from '../../../../store/gameData/gameData.selectors';

import { useStyles } from './FieldCell.styles';
import { setGamePhaseAction } from '../../../../store/gameData/gameData.actions';
import { GAME_PHASES } from '../../../../store/gameData/gameData.types';

const checkFirstCell = (row, col, firstCell) =>
  row === firstCell.row && col === firstCell.col;

const checkFinishCell = (row, col, finishCell) =>
  row === finishCell.row && col === finishCell.col;

export const FieldCell = ({ row, col }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const firstCell = useSelector(selectFirstCell);
  const finishCell = useSelector(selectFinishCell);
  const gamePhaseStore = useSelector(selectGamePhase);

  const isFirstCell = checkFirstCell(row, col, firstCell);
  const isFinishCell = checkFinishCell(row, col, finishCell);

  const clickHandler = () => {
    dispatch(setGamePhaseAction(GAME_PHASES.FINISH));
  };

  return (
    <Paper elevation={4} className={classes.paper} onClick={clickHandler}>
      {(gamePhaseStore === GAME_PHASES.FINISH && (
        <>
          {(isFinishCell && (
            <InsertEmoticonIcon color="secondary" style={{ fontSize: 40 }} />
          )) ||
            (isFirstCell && (
              <LocationOnIcon color="primary" style={{ fontSize: 40 }} />
            ))}
        </>
      )) ||
        (gamePhaseStore === GAME_PHASES.IN_PROGRESS && (
          <>
            {isFirstCell && (
              <LocationOnIcon color="primary" style={{ fontSize: 40 }} />
            )}
          </>
        ))}
    </Paper>
  );
};

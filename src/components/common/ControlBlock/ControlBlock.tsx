import * as React from 'react';
import ColumnSelector from './ColumnSelector';
import { useStyles } from './ControlBlock.styles';
import LineSelector from './LineSelector';
import StartButton from './StartButton';
import StepSelector from './StepSelector';

export const ControlBlock = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColumnSelector />
      <LineSelector />
      <StepSelector />
      <StartButton />
    </div>
  );
};

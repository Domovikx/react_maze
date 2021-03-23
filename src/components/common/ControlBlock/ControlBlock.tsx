import * as React from 'react';
import ColumnSelector from './ColumnSelector';
import LineSelector from './LineSelector';
import StartButton from './StartButton';
import StepSelector from './StepSelector';

export const ControlBlock = () => (
  <div>
    <ColumnSelector />
    <LineSelector />
    <StepSelector />
    <StartButton />
  </div>
);

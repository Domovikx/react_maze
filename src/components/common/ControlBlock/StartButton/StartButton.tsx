import * as React from 'react';
import { Button } from '@material-ui/core';

export const StartButton = () => {
  const handleClick = () => {
    console.log('handleClick :>> ');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Start
    </Button>
  );
};

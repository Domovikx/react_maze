import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rotateRight: {
    transform: 'rotate(90deg)',
  },
  rotateDown: {
    transform: 'rotate(180deg)',
  },
  rotateLeft: {
    transform: 'rotate(270deg)',
  },
  paper: {
    display: 'flex',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    borderRadius: '50%',
  },
}));

import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  table: {
    '& td': {
      padding: 0,
      borderBottom: 0,
    },
  },
}));
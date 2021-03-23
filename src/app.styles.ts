import { makeStyles } from '@material-ui/core';

import image from './assets/images/vector-blue-squares-abstract-background-abstraktsiia-geometr.jpg';

export const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  },
}));

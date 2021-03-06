import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center',
      '& > *': {
        height: '100px !important',
        width: '100px !important'
      },
    },
  }),
);

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { EditLayoutI } from './EditLayout.model';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

function EditLayout({ children }: EditLayoutI) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default EditLayout;

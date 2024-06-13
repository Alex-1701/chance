import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Reader from '../../svg/reader.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '60vh',
    },
    flex: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chip: {
      height: '40px',
      fontSize: 15,
    },
    border: {
      margin: theme.spacing(2),
      borderBottom: '2px solid #fff',
    },
  })
);

function NotDevicePage() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        <Chip
          className={classes.chip}
          color="default"
          label="Пожалуйста подключите NFC считыватель"
        />
      </div>
      <div className={classes.border}></div>
      <div className={classes.flex}>
        <img src={Reader} alt="Reader" />
      </div>
    </div>
  );
}

export default NotDevicePage;

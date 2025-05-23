import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70vh',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 0 10px 10px #fff',
    },
    img: {
      marginRight: theme.spacing(2),
    },
    flex: {
      display: 'flex',
    },
    rightBorder: {
      borderRight: '2px solid black',
      display: 'flex',
      alignItems: 'center',
    },
    info: {
      marginLeft: theme.spacing(2),
    },
    item: {
      marginTop: theme.spacing(2),
    },
  })
);

function NotCardPage() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        <div className={classes.rightBorder}>
          <Skeleton
            variant="circle"
            width={250}
            height={250}
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <div className={classes.item}>
            <Badge badgeContent="Имя" color="secondary">
              <Skeleton variant="text" width={200} height={50} />
            </Badge>
          </div>
          <div className={classes.item}>
            <Badge badgeContent="Фамилия" color="secondary">
              <Skeleton variant="text" width={200} height={50} />
            </Badge>
          </div>
          <div className={classes.item}>
            <Badge badgeContent="Город" color="primary">
              <Skeleton variant="text" width={200} height={50} />
            </Badge>
          </div>
          <div className={classes.item}>
            <Badge badgeContent="Баланс" color="error">
              <Skeleton variant="rect" width={200} height={90} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotCardPage;

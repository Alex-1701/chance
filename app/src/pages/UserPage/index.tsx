import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { UserI } from '../../App';
import logo from '../../svg/icon.png';

type UserPageType = {
  user: UserI;
};

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
      width: 250,
      height: 250,
      marginRight: theme.spacing(2),
    },
    flex: {
      display: 'flex',
    },
    rightBorder: {
      borderRight: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      marginLeft: theme.spacing(2),
    },
    item: {
      marginTop: theme.spacing(2),
    },
    standartItem: {
      width: 200,
      height: 50,
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigItem: {
      width: 185,
      height: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigItemText: {
      fontSize: 30,
      margin: theme.spacing(1),
    },
    coin: {
      border: '2px solid #000',
    },
  })
);

function UserPage({ user }: UserPageType) {
  const classes = useStyles();

  const [color, setColor] = React.useState<string>('border-gradient-rare');

  React.useEffect(() => {
    if (user.points < 1000) {
      setColor('border-gradient-rare');
    }
    if (user.points >= 1000 && user.points < 2000) {
      setColor('border-gradient-silver');
    }
    if (user.points >= 2000 && user.points < 3000) {
      setColor('border-gradient-gold');
    }
    if (user.points >= 3000) {
      setColor('border-gradient-top');
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        <div className={classes.rightBorder}>
          <Avatar
            src={`http://localhost:8888/images/${user.img}`}
            className={classes.img}
            alt="User image"
          />
        </div>
        <div className={classes.info}>
          <div>
            <div className={classes.item}>
              <Badge badgeContent="Имя" color="secondary">
                <Typography className={classes.standartItem}>
                  {user.name}
                </Typography>
              </Badge>
            </div>
            <div className={classes.item}>
              <Badge badgeContent="Фамилия" color="secondary">
                <Typography className={classes.standartItem}>
                  {user.last_name}
                </Typography>
              </Badge>
            </div>
            <div className={classes.item}>
              <Badge badgeContent="Город" color="primary">
                <Typography className={classes.standartItem}>
                  {user.city}
                </Typography>
              </Badge>
            </div>
            <div className={classes.item}>
              <Badge badgeContent="Баланс" color="error">
                <div className={classes.bigItem} id={color}>
                  <p className={classes.bigItemText}>{user.points}</p>
                  <Avatar alt="Coin image" src={logo} className={classes.coin}>
                    ?
                  </Avatar>
                </div>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
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
  }),
);

interface Props {
  children: React.ReactNode;
}

export function EditLayout({ children }: Props) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

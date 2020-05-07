import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useStyles } from '../../components/Constants'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'

export default function MainPane(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <main
      className={clsx(classes.content, {
          [classes.contentShift]: props.open,
        })}
    >
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <DashboardsCell />
      </Container>
    </main>
  );
}

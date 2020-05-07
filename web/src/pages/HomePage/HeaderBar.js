import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useStyles } from '../../components/Constants'

export default function HeaderBar(props) {
  const classes = useStyles();

 return (
  <AppBar
    position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}
  >
    <Toolbar className={clsx(classes.menuButton, props.open && classes.hide)}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        VIDA
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

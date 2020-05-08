import { Link, routes } from '@redwoodjs/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
        <Link
          className="mr-4"
          to={routes.start()}
        >
          VIDA
        </Link>
      </Typography>
      <div className="text-sm inline-block">
        <a href="https://docs.vida.io" target="_blank" className="inline-block text-white hover:text-teal mr-4">
          Docs
        </a>
        <a href="https://blog.vida.io" target="_blank" className="inline-block text-white hover:text-teal mr-4">
          Blog
        </a>
      </div>
    </Toolbar>
  </AppBar>
  );
}

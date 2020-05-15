import React, { Fragment } from 'react';
import { useStyles } from '../../components/Constants'
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './HeaderBar';
import SideNav from './SideNav';
import MainPane from './MainPane';

export default function HomePage() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideNav handleDrawerClose={handleDrawerClose} open={open} />
      <MainPane open={open}/>
    </div>
  );
}

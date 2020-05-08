import React, { Fragment } from 'react';
import { useStyles } from '../../components/Constants'
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './HeaderBar';
import SideNav from './SideNav';
import MainPane from './MainPane';

interface HeaderProps {
  handleDrawerOpen: () => void
  handleDrawerClose: () => void
  open: boolean
}

const Header = (props: HeaderProps) => {
  return (
    <div className="flex">
      <CssBaseline />
      <HeaderBar handleDrawerOpen={props.handleDrawerOpen} open={props.open} />
      <SideNav handleDrawerClose={props.handleDrawerClose} open={props.open} />
    </div>
  )
}

export default Header

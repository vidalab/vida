import React from 'react';
import Header from '../Common/Header'
import MainPane from '../Common/MainPane'

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex w-full">
      <Header handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />
      <MainPane open={open}/>
    </div>
  );
}

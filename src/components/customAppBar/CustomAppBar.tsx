import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

function CustomAppBar() {
  console.log(window.location.pathname);

  function goBack() {
    window.history.back();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {window.location.pathname.includes('pokemon') && (
          <IconButton
            onClick={goBack}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
        )}
        <Typography variant="h6">Pokedex</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;

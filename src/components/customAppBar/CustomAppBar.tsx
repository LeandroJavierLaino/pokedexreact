import React, { useEffect, useState } from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import SearchInput from '../searchInput/SearchInput';
import { useLocation, useHistory } from 'react-router';

function CustomAppBar() {
  const classes = useStyles();

  const [showBack, setShowBack] = useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setShowBack(location.pathname.includes('pokemon'));
  }, [location.pathname]);

  function goBack() {
    history.push('/');
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        {showBack && (
          <IconButton
            onClick={goBack}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
        )}

        {!showBack && <SearchInput />}

        <Typography variant="h6">Pokedex</Typography>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }
  })
);

export default CustomAppBar;

import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Pokemon from '../../pages/pokemon/Pokemon';
import CustomAppBar from '../customAppBar/CustomAppBar';
/**
 * npm i --save-dev @types/react-router-dom
 *
 */

function Routes() {
  return (
    <Router>
      <Box>
        <CustomAppBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/pokemon/:name">
            <Pokemon />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default Routes;

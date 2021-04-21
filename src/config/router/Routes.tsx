import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../../pages/main/Main';
import Pokemon from '../../pages/pokemon/Pokemon';
/**
 * npm i --save-dev @types/react-router-dom
 *
 */

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/pokemon">
          <Pokemon />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

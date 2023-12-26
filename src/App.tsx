import React, { FC } from 'react';
import Home from './pages/Home';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { muiTheme } from 'styles/theme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const App: FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path={routes.index}>
              <Home />
            </Route>
            <Redirect to={routes.index} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default App;

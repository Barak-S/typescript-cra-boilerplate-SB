import React, { FC } from 'react';
import Home from './pages/Home';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { muiTheme } from 'styles/theme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './core';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const App: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact path={routes.index}>
                <Home />
              </Route>
              <Redirect to={routes.index} />
            </Switch>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  );
}

export default App;

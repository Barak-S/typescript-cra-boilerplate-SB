import { MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from 'styles/theme';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

export const decorators = [
  (Story) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={muiTheme}>
        <Story />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  ),
];
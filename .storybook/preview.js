import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { muiTheme } from 'styles/theme';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const decorators = [
  (Story) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={muiTheme}>
        <Story />
      </ThemeProvider>
    </LocalizationProvider>
  ),
];
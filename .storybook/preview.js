import { MuiThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from 'styles/theme';

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={muiTheme}>
      <Story />
    </MuiThemeProvider>
  ),
];
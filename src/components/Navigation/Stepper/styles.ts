import { StepConnector } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import { colors } from 'styles';

export const StepperConnector = withStyles({
  alternativeLabel: {
    top: 19,
    left: '-50%',
    right: '50%',
  },
  active: {
    '& $line': {
      background: colors.primary,
    },
  },
  completed: {
    '& $line': {
      background: colors.primary,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: colors.tint3,
    borderRadius: 1,
  },
})(StepConnector);

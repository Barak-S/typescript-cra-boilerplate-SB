import { red } from '@mui/material/colors';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { colors } from './colors';
import { mx } from './mixings';

const mainFont = 'Rubik, sans-serif';

export const muiTheme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.white,
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.yellow,
      },
      arrow: {
        color: colors.yellow,
      },
      popper: {
        top: '10px!important',
      },
    },
    MuiAccordion: {
      root: {
        '&:before': {
          content: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontFamily: mainFont,
      },
      contained: {
        textTransform: 'uppercase',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 17,
        paddingBottom: 17,
        borderRadius: 12,
      },
    },
    MuiInputBase: {
      root: {
        height: 'fit-content',
        '&.Mui-focused > .MuiInputBase-input': {
          // background: colors.white,
          // border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '&.Mui-focused.Mui-error > .MuiInputBase-input': {
          color: colors.error,
        },
        '&.Mui-focused > .MuiInputAdornment-positionStart': {
          // borderColor: colors.withAlpha(colors.brownishGrey, 0.3),
        },
      },
      input: {
        border: `1px solid transparent`,
        boxSizing: 'border-box',
        fontSize: 21,
        borderRadius: 12,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        color: colors.blackTwo,
        fontFamily: mainFont,
        background: colors.paleGrey,
        paddingLeft: 15,
        boxShadow: 'none',
        WebkitAppearance: 'none',
      },
      inputAdornedStart: {
        paddingLeft: 74,
      },
      inputAdornedEnd: {
        paddingRight: 50,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 12,
        padding: 0,
        position: 'relative', // Make sure the container is relatively positioned
        '&.Mui-focused:not(.Mui-error)': {
          color: colors.primary,
        },
        '&.Mui-focused:not(.Mui-error) + .MuiInputBase-root > .MuiInputBase-input': {
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '& + .MuiInput-formControl': {
          marginTop: 0,
        },
        // '& + .MuiInputAdornment': {
        //   position: 'absolute',
        //   top: 0, // Adjust top position as needed
        //   right: 0, // Adjust right position as needed
        // },
      },
      input: {
        // backgroundColor: colors.white,
        border: 'none',
        width: '100%',
        height: 52,
      },
      // inputAdornedEnd: {
      //   position: 'absolute',
      // }
    },
    MuiInput: {
      underline: {
        '&:before, &:after': {
          content: 'none',
        },
      },
      input: {
        '&[type="date"]::-webkit-calendar-picker-indicator': {
          opacity: 0,
          position: 'absolute',
          left: -27,
          ...mx.zIndex.base,
          ...mx.square(54),
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        textTransform: 'capitalize',
        zIndex: 1,
        fontSize: 16,
      },
      root: {
        '&.Mui-focused:not(.Mui-error)': {
          color: colors.primary,
        },
        '&.Mui-focused:not(.Mui-error) + .MuiInputBase-root > .MuiInputBase-input': {
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '& + .MuiInput-formControl': {
          marginTop: 0,
        },
      },
    },
    MuiFormLabel: {
      root: {
        pointerEvents: 'none',
        '&.MuiInputLabel-formControl:not(.Mui-focused):not([class*="-filled"])': {
          transform: 'translate(15px, 30px) scale(1)',
        },
      },
      asterisk: {
        color: colors.rustyRed,
        transform: 'translateX(-3px)',
        display: 'inline-flex',
        '&$error': {
          color: colors.error,
        },
      },
      filled: {
        color: colors.primary,
        '& + .MuiInputBase-root > .MuiInputBase-input': {
          background: colors.white,
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '&.Mui-error + .MuiInputBase-root > .MuiInputBase-input': {
          background: colors.white,
          color: colors.error,
          borderColor: 'currentColor',
        },
        '&.Mui-error + .MuiInputBase-root > .MuiInputAdornment-positionStart': {
          borderColor: colors.error,
        },
      },
    },
    MuiInputAdornment: {
      positionStart: {
        boxSizing: 'border-box',
        top: 0,
        left: 0,
        width: 54,
        height: 52,
        maxHeight: 'initial',
        background: colors.veryLightPinkThree,
        justifyContent: 'center',
        marginRight: 0,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        border: '1px solid transparent',
        borderRight: 'none',
      },
      positionEnd: {
        right: 15,
        '& .MuiIconButton-edgeEnd': {
          width: 44,
          height: 44,
        },
      },
    },
    MuiCheckbox: {
      root: {
        marginRight: 3,
      },
    },
    MuiTabs: {
      root: {
        height: '100%',
        overflow: 'visible',
      },
      flexContainer: {
        height: '100%',
      },
      scroller: {
        overflow: 'visible!important',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'inherit',
        fontSize: 'inherit',
        maxWidth: 'initial',
      },
    },
    MuiStepIcon: {
      root: {
        display: 'none',
      },
    },
    MuiStepLabel: {
      root: {
        position: 'relative',
      },
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          color: colors.white,
          backgroundColor: colors.primary,
          '&:hover': {
            color: colors.white,
            backgroundColor: colors.primary,
          },
        },
        '&:hover': {
          color: colors.white,
          backgroundColor: colors.primary,
        },
      },
    },
  },
}));

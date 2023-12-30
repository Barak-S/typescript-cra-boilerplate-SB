import { red } from '@mui/material/colors';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { colors } from 'styles';

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
      default: colors.background,
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
        fontSize: 14,
        fontWeight: 600,
        // textTransform: 'uppercase',
        fontFamily: mainFont,
      },
      contained: {
        // textTransform: 'uppercase',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 17,
        paddingBottom: 17,
        borderRadius: 12,
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        '&.Mui-focused:not(.Mui-error)': {
          color: 'transparent !important',
        },
        // '&.Mui-focused > .MuiInputAdornment-positionStart': {
        //   borderColor: `${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        // },
        '& .MuiInputBase-input': {
          backgroundColor: colors.paleGrey,
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
          borderRadius: 12,
          height: 50,
          paddingLeft: 16,
          paddingRight: 16
        },
        '&.Mui-focused > .MuiInputBase-input': {
          background: colors.white,
          border: `1px solid ${colors.withAlpha(colors.brownishGrey, 0.3)}`,
        },
        '&.Mui-focused.Mui-error > .MuiInputBase-input': {
          color: colors.error,
        },
        '& .MuiInputLabel-root': {
          transform: 'translate(15px, 30px) scale(1)',
        },
        '& > label': {
          '&[class*="-shrink"]:not([class*="-focused"])': {
            transform: 'translate(0, -6px) scale(.75)',
          },
          '&[class*="-shrink"][class*="-focused"]': {
            transform: 'translate(0, -6px) scale(.75)',
          },
          '&[class*="-shrink"][class*="-filled"]': {
            transform: 'translate(0, -6px) scale(.75)',
          },
          '& .MuiFormLabel-asterisk': {
            color: colors.error,
            transform: 'translateX(-3px)',
            display: 'inline-flex',
          },
        },
      },
      input: {
        border: `1px solid transparent`,
        boxSizing: 'border-box',
        fontSize: 16,
        borderRadius: 12,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        color: colors.black,
        fontFamily: mainFont,
        backgroundColor: colors.paleGrey,
        // background: colors.white,
        paddingLeft: 15,
        boxShadow: 'none',
        WebkitAppearance: 'none',
      },
      // inputAdornedStart: {
      //   paddingLeft: 74,
      // },
      // inputAdornedEnd: {
      //   paddingRight: 50,
      // },
    },
    MuiInput: {
      underline: {
        '&:before, &:after': {
          content: 'none',
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translate(15px, 30px) scale(1)',
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
      shrink: {
        transform: 'translate(0, -6px) scale(.75)',
      },
    },
    MuiFormLabel: {
      root: {
        pointerEvents: 'none',
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
        height: 50,
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
        height: 36,
        minHeight: 36,
        overflow: 'visible',
      },
      flexContainer: {
        height: 36,
        alignItems: 'center',
      },
      scroller: {
        height: 36,
      },
    },
    MuiTab: {
      fullWidth: {
        height: 36,
        padding: 0,
      },
      root: {
        height: 36,
        minHeight: 36,
        fontSize: 'inherit',
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

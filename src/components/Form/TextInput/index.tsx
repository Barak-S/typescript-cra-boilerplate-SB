import React, { FC, ReactNode, Ref } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { InputAdornment, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { colors, Styles, Style, mc } from 'styles';

type Props = TextFieldProps & CustomProps;

interface CustomProps {
  inputStyle?: Style;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  valid?: boolean;
  loading?: boolean;
  adornmentType?: 'transparent';
  maxLength?: number;
  forwardRef?: Ref<HTMLDivElement>;
  className?: string;
  placeholder?: string;
}

export const FormTextInput: FC<Props> = ({
  inputStyle,
  iconStart,
  iconEnd,
  valid,
  loading,
  adornmentType,
  maxLength,
  InputProps,
  forwardRef,
  className,
  placeholder,
  ...props
}) => {
  const startIconProps = <InputAdornment position="start">{iconStart}</InputAdornment>;
  const isStartIcon = !!iconStart;
  const { value } = props;
  const classes = useStyles({ value, isStartIcon, valid, adornmentType });

  const getEndAdornment = () => {
    if (loading) {
      return (
        <InputAdornment position="end">
          <CircularProgress style={{ width: 22, height: 22 }} size="small" />
        </InputAdornment>
      );
    }
    if (iconEnd) {
      return <InputAdornment position="end">{iconEnd}</InputAdornment>;
    }
    return undefined;
  };

  return (
    <TextField
      ref={forwardRef}
      className={mc(classes.root, className)}
      fullWidth
      variant="standard"
      {...props}
      placeholder={placeholder}
      InputProps={{
        inputProps: { style: inputStyle, maxLength },
        startAdornment: iconStart ? startIconProps : undefined,
        endAdornment: getEndAdornment(),
        ...(InputProps ? InputProps : {}),
      }}
    />
  );
};

interface StylesConfig {
  value: unknown;
  isStartIcon?: boolean;
  valid?: boolean;
  adornmentType?: 'transparent';
  inputStyle?: Styles;
}

const useStyles = ({ value, isStartIcon, valid, adornmentType, inputStyle }: StylesConfig) =>
  makeStyles((theme) => ({
    root: {
      '& .MuiInputAdornment-root': {
        position: 'absolute',
        ...(adornmentType === 'transparent' && {
          background: 'none',
          border: 'none',
        }),
      },
      ...(isStartIcon && {
        '& .MuiInputBase-root.MuiInput-root .MuiInputBase-input': {
          paddingLeft: 64
        },
      }),
      '& .MuiInputLabel-root': {
        transform: 'translate(15px, 30px) scale(1)',
      },
      '& > label': {
        '&[class*="-shrink"]:not([class*="-focused"])': {
          transform: isStartIcon && !value ? 'translate3D(65px, 20px, 0) scale(.75)' : 'translate(0, -6px) scale(.75)',
        },
        '&[class*="-shrink"][class*="-focused"]': {
          transform: isStartIcon ? 'translate(0px, -6px) scale(.75)' : 'translate(0, -6px) scale(.75)',
        },
        '&[class*="-shrink"][class*="-filled"]': {
          transform: isStartIcon ? 'translate(0px, -6px) scale(.75)' : 'translate(0, -6px) scale(.75)',
        },
        ...(isStartIcon && {
          '&[class*="-shrink"]:not([class*="-focused"]):not([class*="-filled"])': {
            transform: 'translate(64px, 30px) scale(1)',
          },
        }),
        ...(!!valid && {
          '&.Mui-focused:not(.Mui-error) + .MuiInputBase-root > .MuiInputBase-input, &.MuiFormLabel-filled + .MuiInputBase-root > .MuiInputBase-input, &.MuiFormLabel-filled + .MuiInputBase-root > .MuiInputAdornment-positionStart, & + .Mui-focused > .MuiInputAdornment-positionStart': {
            borderColor: colors.green,
          },
        }),
        '& .MuiFormLabel-asterisk': {
          color: colors.rustyRed,
          transform: 'translateX(-3px)',
          display: 'inline-flex',
        },
      },
      ...(adornmentType === 'transparent' && {
        '& .MuiInputBase-input': {
          paddingLeft: 45,
        },
      }),
      ...(inputStyle && {
        '& .MuiInputBase-input': {
          ...inputStyle,
        },
      }),
    },
  }))();

export const useFormTextInputStyles = useStyles;
export type FormTextInputProps = Props;

import { TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Autocomplete from '@mui/material/Autocomplete';import React, { FC } from 'react';

// type BaseProps = Omit<FormAutocompleteProps<string, undefined, undefined, undefined>, 'renderInput'>;
interface AutocompleteOption {
  label: string;
}
interface Props {
  required?: boolean;
  label?: string;
  options: AutocompleteOption[]
}

export const FormAutocomplete: FC<Props> = ({ options, required, label, ...props }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.container}
      classes={{
        endAdornment: classes.endAdornment,
      }}
      options={options}
      disablePortal
      renderInput={params => <TextField variant={"standard"} {...params} required={required} label={label} />}
      {...props}
    />
  );
};

const useStyles = makeStyles({
  container: {
    '&.MuiAutocomplete-root .MuiAutocomplete-inputRoot': {
      paddingRight: 0,
    },
    '&.MuiAutocomplete-root .MuiFormControl-root .MuiInputBase-input': {
      paddingLeft: 15,
      paddingRight: 30,
    },
  },
  endAdornment: {
    right: 6,
  },
});

export interface FormAutocompleteInputProps {
  className?: string;
  required?: boolean;
  label?: string;
  error?: boolean;
  helperText?: string;
}

// export const useFormAutocompleteProps = (inputProps: FormAutocompleteInputProps) => {
//   const classes = useStyles();
//   return {
//     className: classes.container,
//     classes: {
//       endAdornment: classes.endAdornment,
//     },
//     // eslint-disable-next-line react/display-name
//     renderInput: (params: AutocompleteRenderInputParams) => <TextField {...params} {...inputProps} />,
//   };
// };

export type AutocompleteProps = Props;
export default FormAutocomplete;

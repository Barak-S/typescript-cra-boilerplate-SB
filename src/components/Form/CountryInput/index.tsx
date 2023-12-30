import { Autocomplete, TextField } from '@mui/material';
import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { FormAutocompleteInputProps } from '../Autocomplete';
import { countries } from 'utils';
import { makeStyles } from '@mui/styles';

interface Props extends StyleProps, FormAutocompleteInputProps {
  value?: string;
  onBlur?: () => void;
  onChange?: (value?: string) => void;
}

export const FormCountryInput: FC<Props> = ({ label = 'Country', value, required, error, helperText, onChange, ...props }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      options={countries.map(itm => itm.name)}
      inputValue={value || ''}
      value={value}
      freeSolo
      fullWidth
      onInputChange={(_e, val) => onChange && onChange(val)}
      renderInput={params => (
        <TextField
          variant={"standard"}
          {...params}
          required={required}
          label={label}
          className={classes.container}
        />
      )}
      {...props}
    />
  )
}

const useStyles = makeStyles({
  container: {
    '&.MuiAutocomplete-endAdornment': {
      // paddingRight: 0,
    },
    '&.MuiAutocomplete-root .MuiAutocomplete-inputRoot': {
      // paddingLeft: 15,
      // paddingRight: 0,
    },
  },
});

export type FormCountryInputProps = Props;
export default FormCountryInput;

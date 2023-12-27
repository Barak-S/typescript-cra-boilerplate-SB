import { Autocomplete, TextField } from '@mui/material';
import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { FormAutocompleteInputProps } from '../Autocomplete';
import { countries } from 'utils';

interface Props extends StyleProps, FormAutocompleteInputProps {
  value?: string;
  onBlur?: () => void;
  onChange?: (value?: string) => void;
}

export const FormCountryInput: FC<Props> = ({ label = 'country', value, required, error, helperText, onChange, ...props }) => {
  // const customizeAutocompleteProps = useFormAutocompleteProps({ required, label, error, helperText });
  return (
    <Autocomplete
      options={countries.map(itm => itm.name)}
      inputValue={value || ''}
      value={value}
      freeSolo
      fullWidth
      onInputChange={(_e, val) => onChange && onChange(val)}
      renderInput={params => <TextField {...params} required={required} label={label} />}
      {...props}
      // {...customizeAutocompleteProps}
    />
  );
};

export type FormCountryInputProps = Props;
export default FormCountryInput;

import { makeStyles } from '@material-ui/core';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { FC, useState } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { isDate, isNum, isStr } from 'utils';

interface Props extends StyleProps {
  value?: Date;
  minDate?: Date;
  minDateMessage?: string;
  required?: boolean;
  disabled?: boolean;
  emptyLabel?: string;
  disablePast?: boolean;
  maxDate?: Date;
  maxDateMessage?: string;
  label?: string;
  onChange?: (newValue?: Date) => void;
}

export const FormDateInput: FC<Props> = ({
  style,
  label,
  value,
  required,
  disabled,
  disablePast,
  minDate,
  minDateMessage,
  maxDate,
  maxDateMessage,
  emptyLabel,
  onChange,
}) => {
  const [valid, setValid] = useState<boolean>(true);

  const handleDatePickerChange = (newVal: unknown) => {
    if (String(newVal) === 'Invalid Date') {
      setValid(false);
    } else {
      setValid(true);
    }

    if (onChange) {
      if (isDate(newVal)) {
        onChange(newVal);
      }
      if (isNum(newVal) || isStr(newVal)) {
        onChange(new Date(newVal));
      }
    }
  };

  const classes = useStyles(valid);
  const styles = getStyles();
  /**
   * KeyboardDatePicker API:
   * https://material-ui-pickers.dev/api/KeyboardDatePicker
   */
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={ms(styles.container, style)}>
        <DatePicker
          value={value ? value : null}
          label={label}
          disabled={disabled}
          disablePast={disablePast}
          minDate={minDate}
          className={classes.input}
          maxDate={maxDate}
          autoFocus
          slotProps={{ textField: { variant: "standard" } }}
          onChange={handleDatePickerChange}
        />
        {/* <div style={styles.fakeBtn}>
          <LineAwesomeIcon type="calendar" color={colors.brownishGrey} />
        </div> */}
      </div>
    </LocalizationProvider>
  );
};

const getStyles = (): Styles => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
});

export const useStyles = (valid: boolean) =>
  makeStyles(() => ({
    input: {
      width: '100%',
      '& .MuiInputAdornment-root': {
        position: 'absolute',
      },
      '& > label': {
        '& .MuiFormLabel-asterisk': {
          color: colors.error,
          transform: 'translateX(-3px)',
          display: 'inline-flex',
        },
      },
    },
  }))();

export type FormDateInputProps = Props;
export default FormDateInput;

import { makeStyles } from '@material-ui/core';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import React, { FC, useState } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { isDate, isNum, isStr } from 'utils';
import FormTextInput from '../TextInput';

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

          // required={required}
          disabled={disabled}
          disablePast={disablePast}
          minDate={minDate}
          // minDateMessage={minDateMessage}
          maxDate={maxDate}
          // emptyLabel={emptyLabel}
          // maxDateMessage={maxDateMessage}
          // variant="inline"
          // inputFormat="DD-MM-YYYY"
          // margin="normal"
          // InputAdornmentProps={{
          //   position: 'start',
          // }}
          // slotProps={{
          //   textField: {
          //     helperText: 'MM/DD/YYYY',
          //     // component: (fieldProps) => (
          //     //     <FormTextInput
          //     //       fullWidth={true}
          //     //       className={classes.picker}
          //     //       inputStyle={{
          //     //         color: colors.brownishGrey,
          //     //         fontSize: 16,
          //     //         paddingLeft: 68,
          //     //       }}
          //     //       InputLabelProps={{
          //     //         shrink: true,
          //     //       }}
          //     //       {...fieldProps}
          //     //     />
          //     // )
          //   },
          // }}
          // renderInput={(fieldProps: any) => (
          //   <FormTextInput
          //     fullWidth={true}
          //     className={classes.picker}
          //     inputStyle={{
          //       color: colors.brownishGrey,
          //       fontSize: 16,
          //       paddingLeft: 68,
          //     }}
          //     InputLabelProps={{
          //       shrink: true,
          //     }}
          //     {...fieldProps}
          //   />
          // )}
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
  // fakeBtn: {
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   padding: 14,
  //   pointerEvents: 'none',
  // },
});

export const useStyles = (valid: boolean) =>
  makeStyles(() => ({
    picker: {
      margin: 0,
      // '& .MuiInputBase-root': {
      //   // ...mx.border(1, 'solid', 'transparent'),
      //   borderColor: valid ? 'transparent' : colors.error,
      // },
      '& .MuiSvgIcon-root': {
        opacity: 0,
      },
      // '& .MuiButtonBase-root': {
      //   borderRadius: 0,
      //   borderTopLeftRadius: 6,
      //   borderBottomLeftRadius: 6,
      //   padding: 14,
      //   left: -1,
      // },
      // '& .Mui-error.MuiFormHelperText-root': {
      //   display: 'none',
      // },
      marginBottom: 39,
      height: 50,
      backgroundColor: colors.white,
      '& .MuiInputBase-input': {
          backgroundColor: colors.white,
          border: '1px solid #7D7D7D',
          borderRadius: 6,
          height: 50,
          paddingLeft: 30,
          paddingRight: 30
      },
      '&.Mui-focused > .MuiInputBase-input': {
          background: colors.white,
          border: `1px solid ${colors.black}`,
      },
      '&.Mui-focused.Mui-error > .MuiInputBase-input': {
          color: colors.error,
      },
      '&.Mui-focused > .MuiInputAdornment-positionStart': {
          borderColor: colors.black,
      },
    },
  }))();

export type FormDateInputProps = Props;
export default FormDateInput;
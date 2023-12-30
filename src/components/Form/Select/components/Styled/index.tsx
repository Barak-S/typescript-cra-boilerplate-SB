import { FormControl, IconButton, MenuItem, SelectProps, TextField, FormHelperText, ClickAwayListener } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { FC, useMemo, useState, ReactNode } from 'react';
import { colors, StyleProps, Styles, mc, } from 'styles';
import { genId } from 'utils';
import { LineAwesomeIcon } from 'components/Icons';
import { FormTextInput } from 'components/Form/TextInput';

type Props = StyleProps & CustomProps;

interface CustomProps extends SelectProps {
  label?: string;
  value?: string;
  options: FormSelectStyledOption[];
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  classes?: {
    root?: string;
    label?: string;
    icon?: string;
    iconBtn?: string;
  };
  iconStart?: ReactNode;
  required?: boolean;
  onChange?: (value: any) => void;
}

export interface FormSelectStyledOption {
  name?: string;
  value: unknown;
}

export const FormSelectStyled: FC<Props> = ({
  style,
  label,
  className,
  options,
  disabled,
  required,
  error,
  helperText,
  classes,
  iconStart,
  onChange,
  placeholder,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const localClasses = useStyles(Boolean(iconStart));
  const selectId = useMemo(() => genId(), []);
  const iconType = open ? 'chevron-circle-up' : 'chevron-circle-down';
  const curOpt = options.find(itm => itm.value === props.value);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <FormControl className={mc(localClasses.container, className)} style={style} onClick={() => !disabled && setOpen(!open)}>
        <FormTextInput
          id={selectId}
          variant="standard"
          className={localClasses.select}
          label={label}
          required={required}
          disabled={disabled}
          error={error}
          autoComplete="off"
          placeholder={placeholder}
          value={curOpt && curOpt.name ? curOpt.name : ''}
          iconStart={iconStart}
          iconEnd={<LineAwesomeIcon type={iconType} size={24} className={mc(localClasses.icon, classes?.icon)} />}
        />
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
        {open && (
          <div>
            <div className={localClasses.selectMenu}>
              {options.map(({ name, value }) => (
                <MenuItem
                  key={name}
                  value={String(value)}
                  className={value === props.value ? localClasses.selectedItem : ''}
                  onClick={e => onChange && onChange(value)}
                >
                  {name}
                </MenuItem>
              ))}
            </div>
          </div>
        )}
      </FormControl>
    </ClickAwayListener>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
  },
};

export const useStyles = (iconStart: boolean) =>
  makeStyles({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '& .MuiInputBase-input': {
        marginBottom: 'auto',
        '&.MuiInputBase-inputAdornedStart': {
          paddingLeft: 50,
        },
      },
    },
    select: {
      flex: '1 0 auto',
      height: 50,
      width: '100%',
      marginBottom: 'auto',
      '& .MuiInputBase-input': {
        backgroundColor: colors.white,
      },
    },
    icon: {
      pointerEvents: 'none',
    },
    selectedItem: {
      color: colors.white,
      backgroundColor: colors.green,
    },
    selectMenu: {
      padding: '8px 0',
      borderRadius: 4,
      position: 'absolute',
      top: 66,
      zIndex: 1500,
      backgroundColor: colors.white,
      width: '100%',
      boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
    },
  })();

export type FormSelectStyledProps = Props;
export default FormSelectStyled;

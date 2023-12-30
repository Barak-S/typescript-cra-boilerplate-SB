import React, { FC } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { StyleProps } from 'styles';
import { Typography } from '@mui/material';
import { ContainedButton } from 'components/Buttons/Contained';
import { FormTextInput, FormPasswordInput, FormTextArea, FormDateInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';

type Props = StyleProps;

const Home: FC<Props> = ({ style }) => {
    const classes = useStyles()
    const required = true
    const errors = {
        text: 'error text field',
        password: 'error password field',
        textArea: 'error textArea field',
    }
    const helperText = 'this is helper text'
    return (
        <div className={classes.container} style={style}>
            <Typography>HOME</Typography>
            <FormTextInput
                required={required}
                label="Form Text Input"
                // helperText={errors.text}
                // error={!!errors.text}
            />
            <FormPasswordInput
                required={required}
                label="Form Password Input" fullWidth={false} visible={false}
                iconStart={<LineAwesomeIcon type="lock" />}
                // helperText={errors.password}
                // error={!!errors.password}
            />
            <FormTextArea
                required={required}
                label="Form Text Area"
                // helperText={errors.textArea}
                // error={!!errors.textArea}
            />
            <FormDateInput
                required={required}
                label="FormDateInput"
                // TODO: add error and helper text
                // helperText={errors.textArea}
                // error={!!errors.textArea}
            />
            <ContainedButton startIcon="plus-circle" size="small">Contained Button</ContainedButton>
            <ContainedButton startIcon="plus-circle" size="medium">Contained Button</ContainedButton>
            <ContainedButton startIcon="plus-circle" size="large">Contained Button</ContainedButton>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        maxWidth: 600,
        width: '100%',
        margin: '0 auto',
        gap: 10
    },
}))

export default Home;
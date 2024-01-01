import React, { FC, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { StyleProps } from 'styles';
import { Typography } from '@mui/material';
import { ContainedButton } from 'components/Buttons/Contained';
import { FormTextInput, FormPasswordInput, FormTextArea, FormDateInput, FormChipInput, FormChipInputItem } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';

type Props = StyleProps;

interface FormData {
    text: string;
    password: string;
    date: Date | undefined;
    textArea: string;
}

const Home: FC<Props> = ({ style }) => {
    const classes = useStyles()
    const required = true
    const errors = {
        text: 'error text field',
        password: 'error password field',
        textArea: 'error textArea field',
    }
    const chipItems: FormChipInputItem[] = [
        {
          key: `first`,
          label: 'First',
        },
        {
          key: `second`,
          label: 'Second',
        },
        {
          key: `third`,
          label: 'Third',
        },
    ]
    const [visible, setVisible] = useState<boolean>(false)
    const handleChangeVisibleClick = () => {
        setVisible(!visible)
    }
    const [data, setData] = useState<FormData>({
        text: '',
        password: '',
        date: undefined,
        textArea: ''
    })
    const [items, setItems] = useState<FormChipInputItem[]>(chipItems || []);
    const handleChipsChange = (newItems: FormChipInputItem[]) => {
        setItems(newItems)
    }
    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleDateChange = (newValue?: Date | undefined) => {
        setData({ ...data, date: newValue })
    }
    return (
        <div className={classes.container} style={style}>
            <Typography>HOME</Typography>
            <FormTextInput
                required={required}
                label="Form Text Input"
                value={data.text}
                name="text"
                onChange={handleChange}
            />
            <FormPasswordInput
                required={required}
                label="Form Password Input"
                fullWidth={false}
                iconStart={<LineAwesomeIcon type="lock" />}
                onChangeVisibleClick={handleChangeVisibleClick}
                visible={visible}
                value={data.password}
                name="password"
                onChange={handleChange}
            />
            <FormTextInput
                required={required}
                label="Form Text Input"
                helperText={errors.text}
                error={!!errors.text}
                value={data.text}
                name="text"
                onChange={handleChange}
            />
            <FormPasswordInput
                required={required}
                label="Form Password Input"
                fullWidth={false}
                iconStart={<LineAwesomeIcon type="lock" />}
                onChangeVisibleClick={handleChangeVisibleClick}
                visible={visible} 
                helperText={errors.password}
                error={!!errors.password}
                value={data.password}
                name="password"
                onChange={handleChange}
            />
            <FormTextArea
                required={required}
                label="Form Text Area"
                value={data.textArea}
                name="textArea"
                onChange={handleChange}
                // TODO: add error and helper text
                // helperText={errors.textArea}
                // error={!!errors.textArea}
            />
            <FormDateInput
                label={'Date of birth'}
                value={data.date}
                onChange={(newValue?: Date | undefined) => handleDateChange(newValue)}
                // TODO: add error and helper text
                // helperText={errors.textArea}
                // error={!!errors.textArea}
            />
            <FormChipInput label={'Chips input'} items={items} onChange={handleChipsChange} />
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
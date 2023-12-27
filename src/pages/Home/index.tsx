import React, { FC } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { StyleProps } from 'styles';
import { Typography } from '@mui/material';
import { ContainedButton } from 'components/Buttons/Contained';
import { FormTextInput, FormPasswordInput, FormTextArea, FormDateInput } from 'components/Form';

type Props = StyleProps;

const Home: FC<Props> = ({ style }) => {

    const classes = useStyles()
    return (
        <div className={classes.container} style={style}>
          <Typography>Home</Typography>
          <FormTextInput label="FormTextInput"/>
          <FormPasswordInput label="FormPasswordInput" fullWidth={false} visible={false} />
          <FormTextArea label="FormTextArea"/>
          <FormDateInput label="FormDateInput" />
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
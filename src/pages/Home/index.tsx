import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from 'styles';
import { Typography } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons/Contained';
import { FormInput, FormPasswordInput, FormTextArea } from 'components/Form';

type Props = StyleProps;

const Home: FC<Props> = ({ style }) => {

    const classes = useStyles()
    return (
        <div className={classes.container} style={style}>
            <Typography>Home</Typography>
            <FormInput />
            <FormPasswordInput fullWidth={false} visible={true} />
            <FormTextArea/>
            <ContainedButton startIcon="plus-circle" size="small">laisfhasf</ContainedButton>
            <ContainedButton startIcon="plus-circle" size="medium">laisfhasf</ContainedButton>
            <ContainedButton startIcon="plus-circle" size="large">laisfhasf</ContainedButton>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
    },
}))

export default Home;
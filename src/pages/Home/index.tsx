import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StyleProps } from 'styles';
import { Typography } from '@material-ui/core';

type Props = StyleProps;

const Home: FC<Props> = ({ style }) => {

    const classes = useStyles()
    return (
        <div className={classes.container} style={style}>
            <Typography>Home</Typography>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 192,
    },
}))

export default Home;
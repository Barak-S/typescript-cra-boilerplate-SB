import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Social1 from './assets/soc-1.png';
import Social2 from './assets/soc-2.png';
import Social3 from './assets/soc-3.png';
import { StyleProps } from '@styles';

type Props = StyleProps;

const SocialSection: FC<Props> = ({ style }) => {

    const classes = useStyles()
    return (
        <div className={classes.container} style={style}>
            <img src={Social1} onClick={()=>window.open("", "_blank")} style={{ cursor: 'pointer', objectFit: 'contain', width: 38 }} />
            <img src={Social2} onClick={()=>window.open("", "_blank")} style={{ cursor: 'pointer', objectFit: 'contain', width: 43 }} />
            <img src={Social3} onClick={()=>window.open("", "_blank")} style={{ cursor: 'pointer', objectFit: 'contain', width: 45 }} />
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

export default SocialSection;
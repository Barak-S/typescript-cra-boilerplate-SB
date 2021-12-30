import React, { FC, useState } from 'react';
import { colors, StyleProps } from '../../styles';
import { AppBar, Container, useMediaQuery, useTheme, Button, makeStyles } from '@material-ui/core';
import Logo from '../../assets/images/Logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import SocialSection from '../../components/SocialSection';
import { useHistory } from 'react-router-dom';
import NavMenuItem from './components/NavMenuItem';

type Props = StyleProps;

const NavBarLayout: FC<Props> = ({ style }) => {
    const theme = useTheme();
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container className={classes.container}>
                <div className={classes.navigationBar}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            onClick={()=> !isMobile ? history.push('/') : undefined}
                            src={Logo} 
                            style={{ 
                                height: isMobile ? open ? 36 : 52 : 104, 
                                cursor: 'pointer' ,
                                display: isMobile ? 'none' : 'initial'
                            }} 
                        />
                        <div className={classes.linkSection}>
                            <NavMenuItem 
                                label={'About'} 
                                path={`/#about`}
                            />
                            <NavMenuItem 
                                label={'FAQ'} 
                                path={`/#faq`}
                            />
                            <NavMenuItem 
                                label={'Team'} 
                                path={`/#team`}
                            />
                        </div>
                    </div>
                    {isMobile && (
                        open ? 
                        (<FiX size={32} className={classes.menuToggle} onClick={()=>setOpen(false)} />)
                        :
                        (<FiMenu size={32} color={colors.white} className={classes.menuToggle} onClick={()=>setOpen(true)} />)
                    )}
                    <SocialSection style={{ marginLeft: 62, display: isMobile ? 'none' : 'flex' }} />
                </div>
            </Container>
            {isMobile ? (
                <div className={classes.mobileMenu} style={{ transform: open ? 'translateX(0%)' : 'translateY(-100%)', transition: '0.3s ease'}}>
                    <div className={classes.linkSectionMobile}>
                        <NavMenuItem 
                            handleClick={()=> setOpen(false)} 
                            label={'About'} 
                            path={`/#about`}
                        />
                        <NavMenuItem 
                            handleClick={()=> setOpen(false)} 
                            label={'FAQ'} 
                            path={`/#faq`}
                        />
                        <NavMenuItem 
                            handleClick={()=> setOpen(false)} 
                            label={'Team'}
                            path={`/#team`} 
                        />
                        <SocialSection style={{ margin: '0 auto' }} />
                    </div>
                </div>
            ):(
                undefined
            )}
        </AppBar>
    );
};

  const useStyles = makeStyles(theme => ({
    container: {
        height: 139,
        maxWidth: 1730,
        display: 'flex',
        width: '100%',
        zIndex: 999,
        [theme.breakpoints.down('sm')]:{
            height: 87
        }
    },
    appBar: {
        boxShadow: 'none',
        zIndex: 990,
        backgroundColor: colors.grey,
    },
    connectWallet: {
        width: 238,
        height: 72,
        border: `3px solid ${colors.white}`,
        backgroundColor: colors.white,
        color: colors.black,
        fontWeight: 500,
        borderRadius: 36,
        marginLeft: 41,
        fontSize: 19,
        '&:hover': {
            backgroundColor: '#464545',
            color: colors.white,
        },
        [theme.breakpoints.down('sm')]: {
            border: `3px solid ${colors.white}`,
            backgroundColor: colors.black,
            color: colors.white,
            margin: '0 auto',
            marginBottom: 16,
        }
    },
    menuToggle: {},
    menuCloseToggle: {
        position: 'absolute',
        top: 31,
        left: 20,
    },
    mobileMenu: {
        height: '100%',
        backgroundColor: colors.black,
        width: '100%',
        display: 'flex',
        zIndex: 990,
        position: 'fixed',
    },
    navigationBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'start',
        }
    },
    linkSection :{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    linkSectionMobile: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 65,
        width: '100%',
    },
    menuItem: {
        textTransform: 'uppercase',
        display: 'inline-block',
        paddingBottom: 3,
        textDecoration: 'none',
        textShadow: `0 0 3px ${colors.black}`,
        fontSize: 19,
        fontWeight: 500,
        color: colors.white,
        margin: '0px 12.5px',
        cursor: 'pointer',
        backgroundImage: `linear-gradient(${colors.white}, ${colors.white}), linear-gradient(transparent, transparent)`,
        backgroundSize: '0 3px, auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        transition: 'all .2s ease-out',
        '&:hover': {
            backgroundSize: '100% 3px, auto',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 26,
            margin: '12px 27px',
            marginLeft: 45,
            color: colors.white,
            textShadow: 'none'
        }
    }

  }))

export default NavBarLayout;
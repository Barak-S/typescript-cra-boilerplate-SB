import React, { FC } from 'react';
import { colors, StyleProps } from '../../../../styles';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface MenuItemProps extends StyleProps {
    label?: string;
    path?: string;
    handleClick?: ()=>void;
}


const NavMenuItem: FC<MenuItemProps> = ({ label, handleClick, path, style }) => {
    const classes = useStyles();
    return (
      <Link
        onClick={handleClick && handleClick}
        style={style}
        className={classes.menuItem}
        to={path || ''}
      >
        {label}
      </Link>
    );
  };

  const useStyles = makeStyles(theme => ({
    container: {
        height: 139,
        maxWidth: 1730,
        display: 'flex',
        width: '100%',
        zIndex: 999,
        [theme.breakpoints.down('md')]:{
            height: 87
        }
    },
    appBar: {
        boxShadow: 'none',
        zIndex: 990,
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
        [theme.breakpoints.down('md')]:{
            justifyContent: 'space-between',
        }
    },
    linkSection :{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]:{
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
        [theme.breakpoints.down('md')]: {
            fontSize: 26,
            margin: '12px 27px',
            marginLeft: 45,
            color: colors.white,
            textShadow: 'none'
        }
    }

  }))

  export default NavMenuItem;

import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Toggle/Toggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu clicked={props.open}/>
        <Logo height="70%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default toolbar;
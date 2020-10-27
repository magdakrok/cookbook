import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Cake</NavigationItem>
        <NavigationItem link="/">Salad</NavigationItem>
       <NavigationItem link="/">Sign in</NavigationItem>

    </ul>
);

export default navigationItems;
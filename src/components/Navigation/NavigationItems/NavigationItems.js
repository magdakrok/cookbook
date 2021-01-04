import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Ciasta</NavigationItem>
        <NavigationItem link="/">Sałatki</NavigationItem>
        <NavigationItem link="/">Dania główne</NavigationItem>
       <NavigationItem link="/">Zarejestruj się</NavigationItem>

    </ul>
);

export default navigationItems;
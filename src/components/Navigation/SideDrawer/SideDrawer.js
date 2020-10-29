import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/auxiliary';
import classes from './SideDrawer.module.css';
import CloseToggle from './CloseToggle/CloseToggle';

const sideDrawer = (props) => {
 
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <CloseToggle />
            
            <nav>
                <NavigationItems />
            </nav>
            <Logo  height="11%"/>
        </div>
        </Aux>
    );
}

export default sideDrawer;
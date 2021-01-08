import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/auxiliary';
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
            <CloseToggle  clicked={props.closed}/>
            
            <nav>
                <NavigationItems />
            </nav>
           
        </div>
        </Aux>
    );
}

export default sideDrawer;
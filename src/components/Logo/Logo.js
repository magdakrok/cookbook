import React from 'react';
import cakeLogo from '../../assets/images/cake128px.png';
import classes from './Logo.module.css';

const logo = (props) =>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={cakeLogo} alt="My cake logo" />
    </div>
);

export default logo;
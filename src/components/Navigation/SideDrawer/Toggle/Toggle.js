import React from 'react';
import toggleIcon from '../../../../assets/images/menu.png';
import classes from './Toggle.module.css';

const toggle = (props) => (

   <div onClick={props.clicked}> 
       <img className={classes.Toggle} src={toggleIcon} alt="Menu toggle" /></div>


);


export default toggle;


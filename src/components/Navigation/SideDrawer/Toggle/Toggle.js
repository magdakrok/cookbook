import React from 'react';
import classes from './Toggle.module.css';

const toggle = (props) => (

   <div className={classes.Toggle} onClick={props.clicked}> 
       <div className={classes.ToggleButton1}></div>
       <div className={classes.ToggleButton2}></div>
       <div className={classes.ToggleButton3}></div>
    </div>



);


export default toggle;


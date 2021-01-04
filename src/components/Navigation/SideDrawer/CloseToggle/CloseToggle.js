import React from 'react';
import classes from './CloseToggle.module.css';

const closeToggle = (props) =>(

    <div onClick={props.clicked} className={classes.CloseToggle}>
    <div className={classes.CloseToggle1}></div>
    <div className={classes.CloseToggle2}></div>
    </div>
);


export default closeToggle;
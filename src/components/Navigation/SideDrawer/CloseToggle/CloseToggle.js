import React from 'react';
import classes from './CloseToggle.module.css';
import Aux from '../../../../hoc/auxiliary';

const closeToggle = (props) =>(

    <div onClick={props.clicked}>
    <div className={classes.CloseToggle1}></div>
    <div className={classes.CloseToggle2}></div>
    </div>
);


export default closeToggle;
import React, { Component } from 'react';
import classes from './Button.module.css';
import axios from '../../../../axios-instance';


const Button = (props) =>(
    <button 
        className = {[classes.Button, classes[props.btnTypes]].join(' ')}
        onClick = {props.action}>{props.children}
    </button>)
    
    


export default Button;
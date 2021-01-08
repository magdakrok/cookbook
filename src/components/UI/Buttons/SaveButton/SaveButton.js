import React, { Component } from 'react';
import classes from './SaveButton.module.css';
import axios from '../../../../axios-instance';


const SaveButton = (props) =>(
    <button
    type="submit" 
        className = {[classes.Button, classes[props.btnTypes]].join(' ')}
        onSubmit = {props.action}>{props.children}
    </button>)
    
    


export default SaveButton;
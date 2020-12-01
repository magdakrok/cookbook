import React, { Component } from 'react';
import classes from './DeleteButton.module.css';
import axios from '../../../../axios-instance';


const deleteButton = (props) =>(
    <button 
        className = {[classes.DeleteButton, classes[props.btnTypes]].join(' ')}
        onClick = {props.delete}>{props.children}
    </button>)
    
    


export default deleteButton;
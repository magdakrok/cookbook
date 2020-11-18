import React from 'react';
import classes from './HeartButton.module.css';

const heartButton = (props) => (

    <button 
        className = {[classes.Heart, classes[props.btnTypes]].join(' ')}
        // onClick = {props.clicked}
        >
        {props.children}
    </button>
);

export default heartButton;
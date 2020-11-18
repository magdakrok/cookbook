import React from 'react';
import classes from './Button.module.css';


class Button extends Comment{

    render(){
        return(
<button 
        className = {[classes.Button, classes[props.btnTypes]].join(' ')}
        onClick = {props.clicked}>{props.children}
    </button>
        )
    }
    
};

export default Button;
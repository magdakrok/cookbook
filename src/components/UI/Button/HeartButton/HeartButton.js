import React, { Component } from 'react';
import classes from './HeartButton.module.css';

class heartButton extends Component {

    
    render(){
    let type;
   
    if(this.props.btnTypes){
        type = 'HeartFavorite'
    }else {
        type = 'HeartUnFavorite'
    }

   
    return(
    <button 
        className = {[classes.Heart, classes[type]].join(' ')}
        // onClick = {props.clicked}
        >
        {this.props.children}
    </button>
    );
    }
};

export default heartButton;
import Axios from 'axios';
import React, { Component } from 'react';
import classes from './HeartButton.module.css';
import axios from '../../../../axios-instance';

const heartButton = (props) => {

    

   
    let type;
   
    if(props.btnTypes){
        type = 'HeartFavorite'
    }else {
        type = 'HeartUnFavorite'
    }

   
    return(
    <button className={classes.ButtonContainer}
        className = {[classes.Heart, classes[type]].join(' ')}
        onClick = {props.setFavorite}
        >
        {props.children}
    </button>
    );
    
};

export default heartButton;
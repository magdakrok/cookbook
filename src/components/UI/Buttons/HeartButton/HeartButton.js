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
        <div className={classes.ButtonContainer}>
    <button className = {[classes.Heart, classes[type]].join(' ')}
        onClick = {props.setFavorite}
        >
        {props.children}
    </button>
    </div>
    );
    
};

export default heartButton;
import React from 'react';
import classes from './HeartButton.module.css';

const heartButton = (props) => {

    let type;
    console.log(props.btnTypes)
    if(props.btnTypes){
        type = 'HeartFavorite'
    }else {
        type = 'HeartUnFavorite'
    }

    console.log(type);
    return(
    <button 
        className = {[classes.Heart, classes[type]].join(' ')}
        // onClick = {props.clicked}
        >
        {props.children}
    </button>
    );
};

export default heartButton;
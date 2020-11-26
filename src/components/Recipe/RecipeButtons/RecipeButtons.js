import React from 'react';
import Button from '../../UI/Button/DeleteButton';
import HeartButton from '../../UI/Button/HeartButton/HeartButton';

const recipeButtons = (props) => {

    let button = null;

  
    switch(props.type){
        case ('favorite'): 
            button = <HeartButton btnTypes={props.statusType} clicked = {props.clicked}></HeartButton>
            break;
        case ('delete'):
            button = <Button btnTypes="Danger" clicked={props.clicked}>Usuń</Button>;
        break;
    }
    return button;

}


export default recipeButtons;
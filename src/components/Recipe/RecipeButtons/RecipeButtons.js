import React from 'react';
import Button from '../../UI/Button/Button';
import HeartButton from '../../UI/Button/HeartButton/HeartButton';

const recipeButtons = (props) => {

    let button = null;

  
    switch(props.type){
        case ('favorite'): 
            button = <HeartButton btnTypes={props.clicked}></HeartButton>
            break;
        case ('delete'):
            button = <Button btnTypes="Danger" clicked={props.clicked}>Usuń</Button>;
        break;
    }
    return button;

}


export default recipeButtons;
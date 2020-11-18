import React from 'react';
import Button from '../../UI/Button/Button';
import HeartButton from '../../UI/Button/HeartButton/HeartButton';

const recipeButtons = (props) => {

    let button = null;

    console.log(props.clicked);
    switch(props.type){
        case ('favorite'): 
            button = <HeartButton btnTypes={props.clicked}></HeartButton>
            break;
        case ('delete'):
            button = <Button btnTypes="Danger" clicked={(e) => this.deleteHandler(this.props.clicked, e)}>Usuń</Button>;
        break;
    }
    return button;

}


export default recipeButtons;
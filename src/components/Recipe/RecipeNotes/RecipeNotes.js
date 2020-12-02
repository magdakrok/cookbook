import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';

class RecipeNotes extends Component{

    render(){
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
                <p>Dodaj swoją notatkę:</p>
                <input type="text"/>
            
            <p>Zapisz</p>
            <p>Edytuj</p>
            <p>Usuń</p>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
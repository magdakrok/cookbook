import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';

class RecipeNotes extends Component{

    render(){
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
                
                <input type="text" placeholder="Dodaj swoją notatkę"/>
            <div>
                <p>Zapisz</p>
                <p>Edytuj</p>
                <p>Usuń</p>
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
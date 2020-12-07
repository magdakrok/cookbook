import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';
import ButtonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';

class RecipeNotes extends Component{

  
  
    deleteHandler = (key) => {
        console.log("deleted" + key)
    //     axios.delete(`https://cookbook-addec.firebaseio.com/cake/${key}.json`
    //     )
    //     .then(res => {
    //         console.log(res.data);
    //         this.fetchDatahandler();
            
    //     })
    //     .catch(e =>{
    //         alert("error")
    //     })
    //    console.log(this.state.cake)
    }
    render(){
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
                
                <input type="text" placeholder="Dodaj swoją notatkę"/>
            <div>
                <p>Zapisz</p>
                <p>Edytuj</p>
                <ButtonsControl type="Danger" btnTypes="Danger" delete = {() => this.deleteHandler(this.props.recipeKey)}>Usuń</ButtonsControl>
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
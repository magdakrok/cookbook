import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';
import ButtonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';
import axios from '../../../axios-instance';


class RecipeNotes extends Component{

  
    
  
    deleteHandler = (key) => {
        console.log("deleted" + key)
        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: null
        })
        .then(res => {
           alert("Usunięto")
            
        })
        .catch(e =>{
            alert("error")
        })
      
    }
    render(){
   
        
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
                    <p>{this.props.notes}, {this.props.keyId}</p>
                </div>
                <input type="text" placeholder="Dodaj swoją notatkę"/>
               
            <div>
               
                <ButtonsControl type="Danger" btnTypes="Danger" delete = {() => this.deleteHandler(this.props.keyId)}>Usuń</ButtonsControl>
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
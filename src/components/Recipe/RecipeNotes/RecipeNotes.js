import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';
import ButtonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';
import axios from '../../../axios-instance';


class RecipeNotes extends Component{


    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    
  
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

   
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
      }
    render(){
   
        
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
                    <p>{this.props.notes}</p>
                    <form onSubmit={this.handleSubmit}>
                         <label>
                            
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Dodaj notatkę"/>
                        </label>
                        {/* <input type="submit" value="Wyślij" /> */}
                    
                <ButtonsControl type="Danger" btnTypes="Danger" delete = {() => this.deleteHandler(this.props.keyId)}>Usuń</ButtonsControl>
                </form>
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
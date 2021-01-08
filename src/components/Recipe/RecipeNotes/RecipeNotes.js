import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';
import ButtonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';
import axios from '../../../axios-instance';
import buttonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';


class RecipeNotes extends Component{

   
    // constructor(props) {
    //     super(props);
    //     this.state = {value: '',
    //                     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    
    
  
    deleteHandler = (key) => {
        console.log("deleted" + key)
        
        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
            this.setState({notes: ""})
           alert("Usunięto")
            
        })
        .catch(e =>{
            alert("error")
        })
        // event.preventDefault();
    }

   
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('Podano następujące imię: ' + this.state.value);
    //     event.preventDefault();
    //   }
    render(){
   
        console.log(this.props.notes)
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
                    <p>{this.props.notes}</p>
                    
                         {/* <label>
                          
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label> */}
                        {/* <input type="submit" value="Wyślij" /> */}
                <ButtonsControl type="Save" btnTypes="Save" onSubmit={this.handleSubmit} ></ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.deleteHandler(this.props.keyId)}>Usuń</ButtonsControl>
               
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import classes from './RecipeNotes.module.css';
import ButtonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';
import axios from '../../../axios-instance';
import buttonsControl from '../../UI/Buttons/ButtonsControl/ButtonsControl';


class RecipeNotes extends Component{


  
   
    constructor(props) {
        super(props);
        this.state = {value: '',
                      update: false,
                     };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      
  

      
      fetchNotesHandler = (key) =>{
        axios.get(`https://cookbook-addec.firebaseio.com/cake/${key}/notes.json`)
        .then(response => {
            this.setState({value: response.data.notes});
            console.log(response);
        });
    }
      
 
    componentDidUpdate(){

    }
    
    
  
    deleteHandler = (key) => {
        console.log("deleted" + key)
        
        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
            this.setState({notes: ""})
           // this.fetchNotesHandler(key);
          //  alert("Usunięto")
            
        })
        .catch(e =>{
            alert("error")
        })
        // event.preventDefault();
    }

   
    
      handleChange(event){
        this.setState({value: event.target.value});
      }
    
      handleSubmit(key, event) {
        alert('Podano następujące imię: ' + this.state.value);
        this.setState({update: true})
       
      }


    render(){
       
    let notes;
    if(this.state.value === ""){
      notes = this.props.notes
    }else {
      notes = this.state.value
    }
        console.log("show" +this.props.show)
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
                    <p>{notes}</p>
                    
                         <label>
                          
                        <input type="text" placeholder="Dodaj notatkę" onChange={this.handleChange} />
                        </label>
                        {/* <input type="submit" value="Wyślij" /> */}
                <ButtonsControl type="Save" btnTypes="Save" action={this.handleSubmit} ></ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.deleteHandler(this.props.keyId)}>Usuń</ButtonsControl>
               
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
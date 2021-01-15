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
        console.log("update" + this.state.update)
      }

 

      
      fetchNotesHandler = (key) =>{
        axios.get(`https://cookbook-addec.firebaseio.com/cake/${key}/notes.json`)
        .then(response => {
            this.setState({value: response.data});
            console.log(response);
        });
    }

    changeUpdateHandler = (string, updateState) => {
      console.log(`initial update ${this.state.update}`)
      if(this.state.update === false){
        this.setState({update: true})
      }else if(this.state.update === true){
        this.setState({update: false})
      }
      // this.setState({update: !updateState});
      setTimeout(()=> 
      console.log(`actual state: ${string} ${this.state.update}`)
      , 500);
    }
      
 
  
    deleteHandler = (key) => {
        console.log("deleted" + true); 
        this.changeUpdateHandler("pierwsza",true);
        setTimeout(()=>axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
          
          alert("Usunięto")
          // this.changeUpdateHandler("druga", false);
          console.log("update: " + this.state.update)
         
            
        })
        .catch(e =>{
            alert("error")
        }),500);
        
        
        console.log("up" +this.state.update)
        
    }

   
    
      handleChange(event){
        this.setState({value: event.target.value});
      }
    
      handleSubmit(key, event) {
        alert('Podano następujące imię: ' + this.state.value);
     
      
        
       
      }


    render(){
       
    let notes;

  
    if(this.state.update === true){
      notes = ""
    }else if(this.state.value === ""){
      notes = this.props.notes
    }else if((this.state.value !== "") && (this.props.notes !== "")){
      notes = this.props.notes + this.state.value
    }else if(this.props.notes === ""){
      notes = this.state.value
    }
  
    

       
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
            <p>{notes}</p> 
           
                 
                        
                      <input type="text" placeholder="Dodaj notatkę" onChange={this.handleChange} />
               
                   
                       
                        {/* <input type="submit" value="Wyślij" /> */}
                <ButtonsControl type="Save" btnTypes="Save" action={this.handleSubmit} ></ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.deleteHandler(this.props.keyId)} >Usuń</ButtonsControl>
               
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
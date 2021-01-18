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
                      notes: '',
                      update: false,
                      key: ''
                     };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("update" + this.state.update)
      }

 

      
    //   fetchNotesHandler = (key) =>{
    //     axios.get(`https://cookbook-addec.firebaseio.com/cake/${key}/notes.json`)
    //     .then(response => {
    //         this.setState({value: response.data});
    //         console.log(response);
    //     });
    // }

    changeUpdateHandler = (string, updateState) => {
      console.log(`initial update ${this.state.update}`)

      // if(this.state.update === false){
      //   this.setState({update: true})
      // }else if(this.state.update === true){
      //   this.setState({update: false})
      // }
      this.setState({update: updateState});
      setTimeout(()=> 
      console.log(`actual state: ${string} ${this.state.update}`)
      , 500);
    }
      
 
  
    deleteHandler = (key) => {
        console.log("deleted" + true); 
        this.setState({key: key})
        // this.changeUpdateHandler("pierwsza",true);
        // 
        setTimeout(() =>axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
          
          alert("Usunięto")
          
          console.log("update: " + this.state.update)
         
            
        })
        .catch(e =>{
            alert("error")
        })
        ,500);
        
        
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
    let propsNotes=this.props.notes;
    let propsKey = this.props.keyId;

    if(this.state.key === propsKey){
      notes=""
    }
    else if(this.state.value === ""){
      notes = propsNotes;
    }else if((this.state.value !== "") && (this.propsNotes !== "")){
      notes = propsNotes + this.state.value
    }else if((propsNotes === "") || (this.props.key !== this.propsKey)){
      notes = this.state.value
    }
  
    

       
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
            <p>{notes}</p> 
                <input type="text" placeholder="Dodaj notatkę" onChange={this.handleChange} />
                <ButtonsControl type="Save" btnTypes="Save" action={this.handleSubmit} ></ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.deleteHandler(this.props.keyId)} >Usuń</ButtonsControl>
               
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
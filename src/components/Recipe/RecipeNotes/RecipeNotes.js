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
        this.changeHandler = this.changeHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
      this.handleSubmit =this.handleSubmit.bind(this);
        console.log("update" + this.state.update)
      }



    changeUpdateHandler = (string, updateState) => {
      console.log(`initial update ${this.state.update}`);
      this.setState({update: updateState});
      setTimeout(()=> 
      console.log(`actual state: ${string} ${this.state.update}`)
      , 500);
    }

    
      
 
  
    removeHandler = (key) => {
        console.log("deleted" + true); 
        this.setState({key: key})
        
       axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
          alert("Usunięto")
          
          console.log("update: " + this.state.update)
         
            
        })
        .catch(e =>{
            alert("error")
        })
       
        
        
        console.log("up" +this.state.update)
        
    }

   
    
      changeHandler(event){
        this.setState({value: event.target.value});
        
      }

      handleSubmit(event){
        event.target.value="";
        event.preventDefault();
      }


    
      addHandler = (key, event) =>{
       
        this.setState({update: true})
     
        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
          notes: this.props.notes + this.state.value
         })
      .then(res => {
        
        alert("Dodano")
        
        console.log("update: " + this.state.update)
        this.setState({update: false})
        this.setState({value: " "})
       
        
      })
      .catch(e =>{
          alert("error")
      })
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
    }else if((this.state.value !== "") && (this.propsNotes !== "") || (this.state.key) ){
      notes = propsNotes + this.state.value
    }else if((propsNotes === "") || (this.props.key !== this.propsKey)){
      notes = this.state.value
    }
  
    

       
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
            <p>{notes}</p> 
            
                <input type="text" id="input_text" placeholder={this.state.value} onChange={this.changeHandler} onMouseLeave={this.handleSubmit} />
                <ButtonsControl type="Save" btnTypes="Save" action={(e) => this.addHandler(this.props.keyId, e.target.value) } ></ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.removeHandler(this.props.keyId)} >Usuń</ButtonsControl>
                
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
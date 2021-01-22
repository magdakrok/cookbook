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

     componentDidUpdate(prevProps){
     if( this.props.userID !== prevProps.userID) {

     }
     }

    removeHandler = (key) => {
        console.log("deleted" + true); 
        this.setState({key: key})
        
       axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            notes: ""
        })
        .then(res => {
          this.setState({update: true})
          alert("Usunięto");
         
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


    
      addHandler = (key) =>{
       
        this.setState({update: true})
        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
          notes: this.props.notes + this.state.value
         })
      .then(res => {
        this.setState({notes: this.props.notes + this.state.value})
        alert("Dodano")
         this.setState({update: false})
        
        
        this.setState({value: ""})
        console.log("notes: " + this.state.notes)
      })
      .catch(e =>{
          alert("error")
      })
    }


    render(){
       
    let notes = this.props.notes
    let propsNotes=this.props.notes;
    let propsKey = this.props.keyId;

    // if(this.props.notes){
    //   notes = this.props.notes
    // }else if(this.state.value !== " "){
    //   notes = this.props.notes + this.state.value
    // }else if((this.state.key === this.props.keyId) && (this.state.notes !== " ")){
    //   notes = this.state.notes
    // }
    
    
    if((this.state.notes !== "") && (this.state.key === this.state.keyId)){
      notes = this.state.notes
    } else if((this.state.value === "") && (this.state.key === this.props.keyId)){
        notes = this.state.notes
      
      }
   else if((this.state.value !== "") && (this.propsNotes !== "") ){
      notes = propsNotes + this.state.value
   }
    else if((propsNotes === "") || (this.props.key === this.propsKey)){
      notes = this.state.value
    }else if(this.state.update === true){
      notes = " "
    }
  // if((this.state.update === true) && (this.state.value === " ") && (this.state.key === this.props.keyId)){
  //   notes = ""
  // }else if((this.state.value === "") && (this.state.key === this.propsKey) && (this.state.notes !== "")){
  //   notes = this.state.notes
  // }
  // else if((this.state.value !== "") && (this.propsNotes !== "") &&(this.state.notes === "")){
  //     notes = this.props.notes + this.state.notes
  
  // }


       
        
        return(
            <Aux>
            <div className={classes.RecipeNotes}>
              
            <div>
            <p>{notes}</p> 
            
                <input type="text" id="input_text" placeholder={this.state.value} onChange={this.changeHandler} onMouseLeave={this.handleSubmit} />
                <div className={classes.RecipeNotesButtons}>
                <ButtonsControl type="Save" btnTypes="Success" action={() => this.addHandler(this.props.keyId)} >Zapisz</ButtonsControl>
                <ButtonsControl type="Danger" btnTypes="Danger" action = {() => this.removeHandler(this.props.keyId)} >Usuń</ButtonsControl>
                </div>
            </div>
            </div>
            </Aux>
        );
    }
}


export default RecipeNotes;
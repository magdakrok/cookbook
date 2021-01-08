import React from 'react';
import HeartButton from '../HeartButton/HeartButton';
import DeleteButton from '../Buttons/Button';
import Aux from '../../../../hoc/Auxiliary/auxiliary';
import classes from './ButtonsControl.module.css';
import NotesButton from '../NotesButton/NotesButton';
import Button from '../Buttons/Button';
import SaveButton from '../SaveButton/SaveButton';

const buttonsControl = (props) =>{
   
  let  buttonType;

  if((props.type === "Heart") ){
      console.log(props.btnTypes)
      buttonType = (<HeartButton btnTypes={props.btnTypes} setFavorite={props.setFavorite}></HeartButton>)
  
  }else if(props.type === "Danger"){
    console.log(props.btnTypes)
   buttonType = ( <Button btnTypes={props.btnTypes} action={props.action}>Usuń</Button>)
  } else if(props.type ==="notes"){
    buttonType = (<NotesButton notes={props.notes} >  </NotesButton>)
  }else if(props.type === "Save"){
    buttonType =(<SaveButton btnTypes={props.btnTypes} action={props.action}>Zapisz</SaveButton>)
  }

  
return (
    <div className={classes.buttonsControl}>
    {buttonType}
    </div>
)

}

export default buttonsControl;
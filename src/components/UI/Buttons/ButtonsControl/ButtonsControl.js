import React from 'react';
import HeartButton from '../HeartButton/HeartButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import Aux from '../../../../hoc/Auxiliary/auxiliary';
import classes from './ButtonsControl.module.css';
import NotesButton from '../NotesButton/NotesButton';

const buttonsControl = (props) =>{
   
  let  buttonType;

  if((props.type === "Heart") ){
      console.log(props.btnTypes)
      buttonType = (<HeartButton btnTypes={props.btnTypes} setFavorite={props.setFavorite}></HeartButton>)
  
  }else if(props.type === "Danger"){
    console.log(props.btnTypes)
   buttonType = ( <DeleteButton btnTypes={props.btnTypes} delete={props.delete}>Usuń</DeleteButton>)
  } else if(props.type ==="notes"){
    buttonType = (<NotesButton notes={props.notes} >  </NotesButton>)
  }

  
return (
    <div className={classes.buttonsControl}>
    {buttonType}
    </div>
)

}

export default buttonsControl;
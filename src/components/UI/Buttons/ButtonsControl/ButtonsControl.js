import React from 'react';
import HeartButton from '../HeartButton/HeartButton';
import DeleteButton from '../Buttons/Button';
import Aux from '../../../../hoc/Auxiliary/auxiliary';
import classes from './ButtonsControl.module.css';
import NotesButton from '../NotesButton/NotesButton';
import Button from '../Buttons/Button';


const buttonsControl = (props) =>{
   
  let  buttonType;

  if((props.type === "Heart") ){
      console.log(props.btnTypes)
      buttonType = (<HeartButton btnTypes={props.btnTypes} setFavorite={props.setFavorite}>{props.children}</HeartButton>)
  
  }else if(props.type === "Danger"){
    console.log(props.btnTypes)
   buttonType = ( <Button btnTypes={props.btnTypes} action={props.action}>{props.children}</Button>)
  } else if(props.type ==="notes"){
    buttonType = (<NotesButton notes={props.notes} > {props.children} </NotesButton>)
  }else if(props.type === "Save"){
    buttonType =(<Button btnTypes={props.btnTypes} action={props.action}>{props.children}</Button>)
  }

  
return (
    <div className={classes.buttonsControl}>
    {buttonType}
    </div>
)

}

export default buttonsControl;
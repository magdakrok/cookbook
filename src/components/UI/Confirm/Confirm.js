import React from 'react';
import classes from './Confirm.module.css';
import ButtonsControl from '../Buttons/ButtonsControl/ButtonsControl';

const confirm = (props)=>(

    <div className = {classes.Confirm}>
      <span>Czy na pewno chcesz usunąć przepis?</span>
      <div className={classes.ConfirmButtons}>
            <ButtonsControl type="Save" btnTypes="Success" action={props.cancel} >Anuluj</ButtonsControl>
            <ButtonsControl type="Danger" btnTypes="Danger" action = {props.action} >Usuń</ButtonsControl>
        </div>
    </div>
)

export default confirm;
import React from 'react';

import classes from './NotesButton.module.css';
import NotesImg from '../../../../assets/images/notes2.jpg';

const NotesButton = (props) => {
    return(
        <button className={classes.NotesButton}
        onClick={props.notes}><img src={NotesImg} alt="Notes Image" className={classes.NotesImg}></img></button>
    )
}

export default NotesButton;
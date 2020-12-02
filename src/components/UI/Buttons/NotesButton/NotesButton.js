import React from 'react';

import classes from './NotesButton.module.css';

const NotesButton = (props) => {
    return(
        <button className={classes.NotesButton}
        onClick={props.notes}>Dodaj notatkę</button>
    )
}

export default NotesButton;
import React, { Component } from 'react';
import classes from '../Controls/Controls.module.css';
import Button from '../../UI/Button/Button';

class Controls extends Component{

    componentDidMount(id){

    }

    deleteHandler = () => {
        alert("Usunięte")
    }

    render(){
        return (
           <Button btnTypes="Danger" clicked={this.deleteHandler}>Usuń</Button>
        )
    }
}

export default Controls;
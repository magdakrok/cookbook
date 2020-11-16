import React, { Component } from 'react';
import classes from '../Controls/Controls.module.css';
import Button from '../../UI/Button/Button';
import axios from '../../../axios-instance';

class Controls extends Component{

    

    deleteHandler = (cakeId, e) => {
        axios.delete(`https://cookbook-addec.firebaseio.com/cake.json/${cakeId}`
        )
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
        .catch(e =>{
            alert("error")
        })
    }

    render(){
        return (
           <Button btnTypes="Danger" clicked={(e) => this.deleteHandler(this.props.cakeId, e)}>Usuń</Button>
        )
    }
}

export default Controls;
import React, { Component } from 'react';
import classes from './DeleteButton.module.css';
import axios from '../../../axios-instance';


class DeleteButton extends Component{

    

    deleteHandler = (key,  e) => {
        axios.delete(`https://cookbook-addec.firebaseio.com/cake/${key}.json`
        )
        .then(res => {
            console.log(res);
            console.log(res.data)
            alert("Usunięto!")
        })
        .catch(e =>{
            alert("error")
        })
       

        console.log(this.props)
    }


    render(){
        return(
    <button 
        className = {[classes.DeleteButton, classes[this.props.btnTypes]].join(' ')}
        onClick = {(e) => this.deleteHandler(this.props.clicked, e)}>{this.props.children}
    </button>
        )
    }
    
};

export default DeleteButton;
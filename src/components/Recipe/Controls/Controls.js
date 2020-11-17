import React, { Component } from 'react';
import classes from '../Controls/Controls.module.css';
import Button from '../../UI/Button/Button';
import axios from '../../../axios-instance';

class Controls extends Component{

    

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
        return (
           <Button btnTypes="Danger" clicked={(e) => this.deleteHandler(this.props.clicked,e)}>Usuń</Button>
        )
    }
}

export default Controls;
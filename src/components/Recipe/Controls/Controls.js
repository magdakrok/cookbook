import React, { Component } from 'react';
import classes from '../Controls/Controls.module.css';
import Button from '../../UI/Button/Button';
import axios from '../../../axios-instance';
import HeartButton from '../../UI/Button/HeartButton/HeartButton';
import Aux from '../../../hoc/Auxiliary/auxiliary';


class Controls extends Component{

    state = {
        favorite: true
    };

    
    
    

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

        let checkFavorite;

            if(this.state.favorite){
                checkFavorite = "HeartFavorite"
            }else{
                checkFavorite = "HeartUnFavorite"
            }
        
        return (
            <Aux>
           <div className={classes.Control}>
           <HeartButton btnTypes={checkFavorite}></HeartButton>
           <Button btnTypes="Danger" clicked={(e) => this.deleteHandler(this.props.clicked, e)}>Usuń</Button>
           </div>
           </Aux>
        )
    }
}

export default Controls;
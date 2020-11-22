import Axios from 'axios';
import React, { Component } from 'react';
import classes from './HeartButton.module.css';
import axios from '../../../../axios-instance';

class heartButton extends Component {

    state={
        favorite: false
    }

    changeFavoriteHandler = (key, e) => {
        
        if(this.props.clicked){
          this.state.favorite = !this.state.favorite
        }
        else{
            this.setState({favorite: true})
        }

        axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
            favorite: this.state.favorite
          
          }).then(res => {
            console.log(res);
            console.log(res.data)
            alert("zmiana")
        })
        .catch(e =>{
            alert("error")
        })
       

        console.log(this.props.clicked)
    }

    render(){
    let type;
   
    if(this.props.btnTypes){
        type = 'HeartFavorite'
    }else {
        type = 'HeartUnFavorite'
    }

   
    return(
    <button className={classes.ButtonContainer}
        className = {[classes.Heart, classes[type]].join(' ')}
        onClick = {(e) => this.changeFavoriteHandler(this.props.clicked, e)}
        >
        {this.props.children}
    </button>
    );
    }
};

export default heartButton;
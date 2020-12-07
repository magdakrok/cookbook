import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';
import Aux from '../../hoc/Auxiliary/auxiliary';
import axios from '../../axios-instance';
import classes from './RecipeBuilder.module.css';

import DeleteButton from '../../components/UI/Buttons/DeleteButton/DeleteButton';
import HeartButton from '../../components/UI/Buttons/HeartButton/HeartButton';
import RecipeNotes from '../../components/Recipe/RecipeNotes/RecipeNotes';
import Modal from '../../components/UI/Modal/Modal';
import NotesButton from '../../components/UI/Buttons/NotesButton/NotesButton';
import ButtonsControl from '../../components/UI/Buttons/ButtonsControl/ButtonsControl';


class RecipesBuilder extends Component{

    state = {
        cake: null,
        update: false,
        favorite: false,
        notesShow: false
        
    }


componentDidMount(){
   this.fetchDatahandler();
}
    
fetchDatahandler= () =>{
    axios.get('https://cookbook-addec.firebaseio.com/cake.json')
    .then(response => {
        this.setState({cake: response.data});
        console.log(response);
    });
}


deleteHandler = (key,  e) => {
    axios.delete(`https://cookbook-addec.firebaseio.com/cake/${key}.json`
    )
    .then(res => {
        console.log(res.data);
        this.fetchDatahandler();
        
    })
    .catch(e =>{
        alert("error")
    })
   console.log(this.state.cake)
}


changeFavoriteHandler = (key,recipeFavorite) => {
        
    if(recipeFavorite === false){
        this.setState({favorite: true})
       
    }else{
        this.setState({favorite: false})
    }

    
    setTimeout(()=>axios.patch(`https://cookbook-addec.firebaseio.com/cake/${key}.json`, {
        favorite: this.state.favorite
      }).then(res => {
       this.fetchDatahandler();
    })
    .catch(e =>{
        alert("error")
    }), 500);


}

notesHandler = () =>{
    this.setState({notesShow: true})
    console.log("true")
}

notesCancelHandler = () =>{
    this.setState({notesShow: false})
    console.log("false")
}



render(){
    
    let recipe;
    
    

        if(this.state.cake){
          recipe = (Object.keys(this.state.cake).map(key => {
                return [...Array(this.state.cake[key])].map((cKey, i ) => {
                   return (
                       <Aux>
                       <div className={classes.RecipeBuilder} key={cKey}>
                            <Recipe title={cKey.title}
                                photo={cKey.photo}
                                http={cKey.http}
                                favorite={cKey.favorite}>{this.props.children}
                            </Recipe>
                            <div className={classes.RecipeButtonsContainer}>
                        
                            <ButtonsControl type="Heart" btnTypes={cKey.favorite}  setFavorite={() => this.changeFavoriteHandler(key, cKey.favorite)}>{this.props.children}</ButtonsControl>
                            <ButtonsControl type="Danger" btnTypes="Danger" delete = {() => this.deleteHandler(key)}>Usuń</ButtonsControl>
                            <NotesButton notes={()=>this.notesHandler()}></NotesButton>

                            <Modal show={this.state.notesShow} modalClosed={this.notesCancelHandler}>
                            <RecipeNotes recipeKey={key}>{this.props.children}</RecipeNotes>
                            
                            </Modal>
                            {/* <RecipeButtons type="favorite" statusType={cKey.favorite} clicked={key} ></RecipeButtons>
                            <RecipeButtons type="delete" clicked={key} updateHandler={()=>this.updateHandler()}></RecipeButtons> */}
                            </div>
                        </div>
                       </Aux>
                   )
                })
            })
            )
        }else{
            recipe = <p>Loading...</p>
        }
        return(
            <Aux>
                <div className={classes.RecipeBuilderContainer}>
                    
                {recipe}
                </div>
            
            </Aux>
        );
    }
}

export default RecipesBuilder;
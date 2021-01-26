import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';
import Aux from '../../hoc/Auxiliary/auxiliary';
import axios from '../../axios-instance';
import classes from './RecipeBuilder.module.css';

import DeleteButton from '../../components/UI/Buttons/Buttons/Button';
import HeartButton from '../../components/UI/Buttons/HeartButton/HeartButton';
import RecipeNotes from '../../components/Recipe/RecipeNotes/RecipeNotes';
import Modal from '../../components/UI/Modal/Modal';
import NotesButton from '../../components/UI/Buttons/NotesButton/NotesButton';
import ButtonsControl from '../../components/UI/Buttons/ButtonsControl/ButtonsControl';
import Confirm from '../../components/UI/Confirm/Confirm';

class RecipesBuilder extends Component{

    state = {
        cake: null,
        update: false,
        favorite: false,
        notesShow: false,
        confirmShow: false,
        notes: null,
        key: null
        
        
    }


componentDidMount(){
   this.fetchDatahandler();
   console.log("params " + this.props.match.params.cake)
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
        this.confirmCancelHandler();
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

confirmHandler = () =>{
    this.setState({confirmShow: true})
}

confirmCancelHandler = () =>{
    this.setState({confirmShow: false})
}

notesHandler = (cKey, notes) =>{
    this.setState({notesShow: true})
    this.setState({key: cKey})
    this.setState({notes: notes})
    
}

notesCancelHandler = () =>{
    this.setState({notesShow: false});
    this.fetchDatahandler();
    
}

notesSaveHandler = () => {
    alert("zapisano")
    this.fetchDatahandler();
}



render(){
    
    let recipe;
    let confirmWindow;
    // console.log(this.state.key)
  
    recipe = <RecipeNotes keyId={this.state.key} 
                        notes={this.state.notes} 
                        notesShow={this.notesSaveHandler} 
                        cancel={this.notesCancelHandler}>
            </RecipeNotes>

   
            
   
    

        if(this.state.cake){
          recipe = (Object.keys(this.state.cake).map(key => {
                return [...Array(this.state.cake[key])].map((cKey, i ) => {
                   return (
                       <Aux>
                       <div className={classes.RecipeBuilder} key={cKey}>
                            <Recipe title={cKey.title}
                                photo={cKey.photo}
                                http={cKey.http}
                                notes={cKey.notes}
                                favorite={cKey.favorite}>{this.props.children}
                            </Recipe>
                            <div className={classes.RecipeButtonsContainer}>
                        
                            <ButtonsControl type="Heart" btnTypes={cKey.favorite}  setFavorite={() => this.changeFavoriteHandler(key, cKey.favorite)}>{this.props.children}</ButtonsControl>
                            
                            <ButtonsControl type="Danger" btnTypes="Danger" action = {this.confirmHandler}>Usuń</ButtonsControl>
                            
                            <Modal show={this.state.confirmShow} modalClosed={this.confirmCancelHandler}>
                                <Confirm action={()=>this.deleteHandler(key)} cancel={this.confirmCancelHandler}></Confirm>
                            </Modal>

                            <ButtonsControl type="notes" notes={()=>this.notesHandler(key, cKey.notes)} ></ButtonsControl>
                           
                           
                            <Modal show={this.state.notesShow} modalClosed={this.notesCancelHandler}>
                                {recipe}
                            </Modal>
                           
                          
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
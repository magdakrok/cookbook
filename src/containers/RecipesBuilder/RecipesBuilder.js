import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';
import Aux from '../../hoc/Auxiliary/auxiliary';
import axios from '../../axios-instance';
import classes from './RecipeBuilder.module.css';
import RecipeButtons from '../../components/Recipe/RecipeButtons/RecipeButtons';
import DeleteButton from '../../components/UI/Button/DeleteButton';
import HeartButton from '../../components/UI/Button/HeartButton/HeartButton';


class RecipesBuilder extends Component{

    state = {
        cake: null,
        update: false
    }


componentDidMount(){
    axios.get('https://cookbook-addec.firebaseio.com/cake.json')
        .then(response => {
            this.setState({cake: response.data});
            console.log(response);
        });
}
    
updateHandler = () =>{
    this.setState({update: true});
    console.log(this.state.update)
}



componentDidUpdate(prevState) {
    // Typowy sposób użycia (nie zapomnij porównać właściwości):
    if (this.state.update === prevState.update) {
        axios.get('https://cookbook-addec.firebaseio.com/cake.json')
        .then(response => {
            this.setState({cake: response.data});
            console.log(response);
        });
    }
  }

//     componentDidUpdate(){
//         console.log(this.props)
//        if(){
//         axios.get('https://cookbook-addec.firebaseio.com/cake.json')
//     .then(response => {
//         this.setState({cake: response.data});
//         console.log(response);

//     })
// }
// }

render(){
    
    let recipe;
    
    let updateHandler;
  
    

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
                        
                            <HeartButton btnTypes={cKey.favorite} clicked = {key}></HeartButton>
                            <DeleteButton btnTypes="Danger" clicked={key}>Usuń</DeleteButton>
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
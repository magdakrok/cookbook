import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';
import Aux from '../../hoc/Auxiliary/auxiliary';
import axios from '../../axios-instance';
import Controls from '../../components/Recipe/Controls/Controls';

class RecipesBuilder extends Component{

    state = {
        cake: null
    }

componentDidMount(){
    axios.get('https://cookbook-addec.firebaseio.com/cake.json')
    .then(response => {
        this.setState({cake: response.data});
        console.log(response);

       
    })
}




    render(){
        
   let recipe;

        if(this.state.cake){
       recipe = (<Recipe data={this.state.cake}/>)
        }else{
            recipe = <p>Loading...</p>
        }
        return(
            <Aux>
                
                {recipe}
                
            </Aux>
        );
    }
}

export default RecipesBuilder;
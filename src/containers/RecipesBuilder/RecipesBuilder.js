import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';
import Aux from '../../hoc/Auxiliary/auxiliary';

class RecipesBuilder extends Component{

    state = {
        data: [{
            http: 'http://przepisy.pl',
            photo: 'http://przepisy.pl/photo',
            title: 'ciasteczka'},
    {
        http: 'http://przyslijprzepis.pl',
        photo: 'http://przepisy.pl/photo',
        title: 'Mazurek'},
        
]}

    render(){
        return(
            <Aux>
                <Recipe data={this.state.data}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default RecipesBuilder;
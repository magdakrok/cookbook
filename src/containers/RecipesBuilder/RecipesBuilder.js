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

       
    });

    console.log(this.props.data)

    
}

//     componentDidUpdate(){
//         console.log(this.props.children)
//        if(!this.props){
//         axios.get('https://cookbook-addec.firebaseio.com/cake.json')
//     .then(response => {
//         this.setState({cake: response.data});
//         console.log(response);

//     })
// }
// }









    render(){

          
  
             

                   

        
   let recipe;

        if(this.state.cake){
          recipe = (  Object.keys(this.state.cake).map(key => {
                return [...Array(this.state.cake[key])].map((cKey, i ) => {
                   return (
                       <Aux>
                       <div key={cKey}>
                        <Recipe title={cKey.title}
                                photo={cKey.photo}>{this.props.children}
                        </Recipe>
                   
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
                
                {recipe}
                
            </Aux>
        );
    }
}

export default RecipesBuilder;
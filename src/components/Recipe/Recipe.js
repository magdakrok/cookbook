import React from 'react';
import Aux from '../../hoc/auxiliary';

const recipe = (props) =>{
   
   const transformedRecipe = Object.keys(props.data)
    .map(rKey => {
        return [...Array(props.data[rKey])]
    });
       

    

   
        return(
            <Aux>
                {transformedRecipe}
                <div>Build Controls</div>
            </Aux>
        );
    
}

export default recipe;
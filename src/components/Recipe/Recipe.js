import React from 'react';
import Aux from '../../hoc/auxiliary';

const recipe = (props) =>{

    const data = props.data;

     const transformedData = data.map(({title, http}) => {
         return <p key={title}>{title} - {http}</p>
     })
        
  
       

    

   
        return(
            <Aux>
                {transformedData}
                <div>Build Controls</div>
            </Aux>
        );
    
}

export default recipe;
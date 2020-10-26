import React from 'react';
import Aux from '../../hoc/auxiliary';

const recipe = (props) =>{

    const data = props.data;

     let transformedData = data.map(({title, http}) => {
         return <p key={title}>{title} - {http}</p>
     });
  
       console.log(transformedData);

    if(transformedData.length === 0){
        transformedData = 'nie masz zapisanych przepisów';
    }

   
        return(
            <Aux>
                {transformedData}
                <div>Build Controls</div>
            </Aux>
        );
    
}

export default recipe;
import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary';
import classes from './Recipe.module.css';

const recipe = (props) =>{

    const data = props.data;
     
   let transformedData = Object.keys(data).map(key => {
      return [...Array(data[key])].map(cKey => {
          return <p key={cKey}>{cKey.title} - {cKey.http}</p>
        
      })
  })
   
       console.log(transformedData);

    if(transformedData.length === 0){
        transformedData = 'nie masz zapisanych przepisów';
    }

   
        return(
            <Aux>
                <div className={classes.Recipe}>
                {transformedData}
                </div>
                <div>Build Controls</div>
            </Aux>
        );
    
}

export default recipe;
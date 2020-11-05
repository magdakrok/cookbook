import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary';
import classes from './Recipe.module.css';

const recipe = (props) =>{

    const data = props.data;
     
   let transformedData = Object.keys(data).map(key => {
      return [...Array(data[key])].map((cKey, i ) => {
         return (
            
                <div key={cKey + i}>
                  <div className={classes.Recipe} key={i}>
                        <div className={classes.RecipePhotoContainer}>
                            <img src={cKey.photo} className={classes.RecipePhoto}></img>
                        </div> 
                    <div className={classes.RecipeTitle}><h2>{cKey.title}</h2>
                    </div> 
                   
                    </div>
                    
                </div>)

        
      })
  })
   
       console.log(transformedData);

    if(transformedData.length === 0){
        transformedData = 'nie masz zapisanych przepisów';
    }

   
        return(
            <Aux>
                <div className={classes.RecipeAll}>
                {transformedData}
                </div>
                <div>Build Controls</div>
            </Aux>
        );
    
}

export default recipe;
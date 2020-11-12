import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary';
import classes from './Recipe.module.css';
import cake from '../../assets/images/ciasto.jpg';

const recipe = (props) =>{

    const data = props.data;
    let photo;

     let checkPhoto = (photoCake) => {
        if(photoCake === ""){
            photo = cake;
           return photo;
        } else {
            photo = photoCake;
            return photo;
        }
    }
     
   let transformedData = Object.keys(data).map(key => {
      return [...Array(data[key])].map((cKey, i ) => {
         return (
            
                <div className={classes.RecipeAll} key={cKey + i}>
                  <div className={classes.Recipe} key={i}>
                     
                       <img src={checkPhoto(cKey.photo)} className={classes.RecipePhoto}></img>
                       <span className={classes.RecipeTitle}>{cKey.title}</span>
                        
                   
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
import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary';
import classes from './Recipe.module.css';
import cake from '../../assets/images/ciasto.jpg';
import Controls from './Controls/Controls';
import { ID } from 'webpack/lib/ModuleFilenameHelpers';

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

   let deleteHandler = (cKey) =>{
        
    }
     
   let transformedData = Object.keys(data).map(key => {
      return [...Array(data[key])].map((cKey, i ) => {
         return (
            
                <div key={cKey}>
                    {/* <a href={cKey.http} className={classes.RecipeHttp}> */}
                        <div className={classes.Recipe}>
                            <div className={classes.RecipeTop}>
                                <img src={checkPhoto(cKey.photo)} className={classes.RecipePhoto}></img>
                            </div>
                            <div className={classes.RecipeBottom}>
                           
                             <span className={classes.RecipeTitle}>{cKey.title}</span>
                             <Controls clicked={key}></Controls>
                             
                             </div>
                            
                       </div>
                      
                    {/* </a> */}
                   
                </div>)

         
      })
  }
  )
   
       console.log(transformedData);

    if(transformedData.length === 0){
        transformedData = 'nie masz zapisanych przepisów';
    }

   
        return(
            <Aux>
                <div className={classes.RecipeAll}>
                {transformedData}
               
                </div>
               
            </Aux>
        );
    
}

export default recipe;
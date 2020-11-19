import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary';
import classes from './Recipe.module.css';
import cake from '../../assets/images/ciasto.jpg';
import Controls from './Controls/Controls';
import RecipeButtons from './RecipeButtons/RecipeButtons';

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

 
     
//    let transformedData = Object.keys(data).map(key => {
//       return [...Array(data[key])].map((cKey, i ) => {
//          return (
            
      let transformedData = (          <div>
                    {/* <a href={cKey.http} className={classes.RecipeHttp}> */}
                        <div className={classes.Recipe}>
                            <div className={classes.RecipeTop}>
                                <img src={checkPhoto(props.photo)} className={classes.RecipePhoto}></img>
                            </div>
                            <div className={classes.RecipeBottom}>
                           
                             <span className={classes.RecipeTitle}>{props.title}</span>
                             {/* <RecipeButtons type="delete" clicked={key}></RecipeButtons>
                             <RecipeButtons type="favorite" statusType={favorite} clicked={key} ></RecipeButtons>
                              */}
                             </div>
                            
                       </div>
                       </div>)
                      
                 {/* </a> */}
                   
                   
    {/* </div>) */}

{/*          
     })
   }
) */}



   
       console.log(data);

    // if(props.data === null){
    //     transformedData = 'nie masz zapisanych przepisów';
    // }

   
        return(
            <Aux>
                <div className={classes.RecipeAll}>
                {transformedData}
               
                </div>
               
            </Aux>
        );
    
}

export default recipe;
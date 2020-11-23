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


      let transformedData = (
                   
                        <div className={classes.Recipe} key={props.key}>
                                 <a href={props.http} className={classes.RecipeHttp}>
                                <div className={classes.RecipeTop}>
                                    <img src={checkPhoto(props.photo)} className={classes.RecipePhoto}></img>
                                </div>
                                <div className={classes.RecipeBottom}>
                                    <span className={classes.RecipeTitle}>{props.title}</span>
                                </div>
                            </a>
                        </div>)
                      
                
   

    // if(props.data === null){
    //     transformedData = 'nie masz zapisanych przepisów';
    // }

   
        return(
            <Aux>
                
                    {transformedData}
               
               
            </Aux>
        );
    
}

export default recipe;
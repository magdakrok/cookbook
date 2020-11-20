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


      let transformedData = (<div key={props.key}>
                    <a href={cKey.http} className={classes.RecipeHttp}>
                        <div className={classes.Recipe}>
                                <div className={classes.RecipeTop}>
                                    <img src={checkPhoto(props.photo)} className={classes.RecipePhoto}></img>
                                </div>
                                <div className={classes.RecipeBottom}>
                                    <span className={classes.RecipeTitle}>{props.title}</span>
                                </div>
                        </div>
                    </a>
                    </div>)
                      
                
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
import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './HomePage.module.css';
import {Link } from 'react-router-dom';

const homePage = (props) => (

    <div className={classes.HomePage}>
       <div className={classes.Cake}></div>
        <ul>
        <div><li><Link to="/cake">Ciasta</Link></li></div>
        
        <div><li><Link to="/salad">Sałatki</Link></li></div>
        <div><li><Link to="/dish">Dania główne</Link></li>

        </div>
      
        </ul>
    </div>
)

export default homePage;
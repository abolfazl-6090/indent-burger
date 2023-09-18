
import classes from "./NavigationItem.css";
import { NavLink } from 'react-router-dom';
import React from 'react';


const NavigationItem = (props) => {


    return (  
    <li className='NavigationItem'>
        <NavLink to={props.link} >
          {props.children}
        </NavLink>
    </li> );
}
 
export default NavigationItem





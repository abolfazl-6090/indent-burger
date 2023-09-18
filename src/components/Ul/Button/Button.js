import React from "react";
import classes from './Button.module.css';


const Button = (props) =>{


return (
    
    <button 
        disabled={props.isDisable}
        onClick={props.clicked}
        className={ [classes[props.btnType],classes.Button ].join(' ')}>
        {props.children}
    </button>
);}

export default Button
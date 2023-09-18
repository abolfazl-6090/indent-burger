import React from "react";
import classes from './spinner.module.css'



const Spinner = () => {
    return ( <div className={classes.loader } style={{position:'absolute',right:'50%',top:'45%'}}></div>);
}
 
export default Spinner;

 
 

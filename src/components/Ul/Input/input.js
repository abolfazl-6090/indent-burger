import { logRoles } from "@testing-library/react";
import classes from "./input.module.css";


const Input = (props) => {

  
  let inputElement = null;

  const inputClasses =[classes.InputElement]

  if(props.invalid && props.shouldValidate &&props.touched ){
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}

        />
      )
      break;
    case "textarea":
      inputElement = (
        <textarea
        className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select   onChange={props.changed}   className={inputClasses.join(' ')}  >
        {props.elementConfig.options.map((option)=>{return <option  key={option.value} value={option.value}>{option.displayValue}</option>})}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
        className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}

        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
     
    </div>
  );
};

export default Input;

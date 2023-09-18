import { useState } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../Ul/Button/Button";
import classes from "./CheckoutSummary.module.css";
import { useNavigate } from "react-router-dom";

const CheckoutSummary = (props) => {
  const Navitate = useNavigate();

  const [state, set] = useState(false);

  const disabaleHandler = (off) => {
  off ? set(false) : set(true);
  };

  let continitueHandler = () => {
    Navitate("contact-data");
    disabaleHandler();
  };

  let cancellHandler = () => {
   window.history.back()
    disabaleHandler([]);
  };



  return (
    <div className={classes.CheckoutSummary}>

  
      <h1>We hope it tastes well!</h1>
      <div className={classes.burger}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button clicked={cancellHandler} btnType="Danger">
        {" "}
        CANCEL
      </Button>
      <Button isDisable={state} clicked={continitueHandler} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;

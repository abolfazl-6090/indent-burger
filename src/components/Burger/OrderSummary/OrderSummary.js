import React, { Component } from "react";
import Aux from "../../../hoc/Auxx/Auxx";
import Button from "../../Ul/Button/Button";
import { Link } from "react-router-dom";


const OrderSummary = (props) => {



  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <strong>Total Price : {props.price.toFixed(2)}</strong>
      <p>Continue to Checkout?</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
            CANCELL
        </Button>

        <Button btnType="Success" >
          <Link style={{ color: "inherit", textDecoration: "inherit"}}  to={{pathname:'/checkout'}}  >   
            CONTINUE
          </Link>
        </Button>
      </div>
    </Aux>
  );
};

export default OrderSummary;

import React from 'react';
import classes from './Order.module.css'


const Order = (props) => {

const ingredients = [];

for ( let ingredientName in props.ingredients ){
    ingredients.push({
                name: ingredientName,
                amount: props.ingredients[ingredientName]
})}


const ingredientOutput = ingredients.map(ig => {
    return <span className={classes.mySpan} key={ig.name+ig.amount}> {ig.name} ({ig.amount})  </span>
})


    return ( 
    <div className={classes.Order}>
        <p>Ingredients : {ingredientOutput} </p>
        <p>Price: <strong>USD {props.price.toFixed()}</strong></p>
    </div> );
}
 
export default Order;



import React,{Component} from "react";
import classes from './burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";




class Burger extends Component {

  
  render() { ;
     let transformedIngredients = Object.keys(this.props.ingredients).map(igKey => {
      
        return [...Array(this.props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />;
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

     if(transformedIngredients.length===0){
      transformedIngredients = <h3>Please start adding ingredients!</h3>;
    }
    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />         
            {transformedIngredients}
          <BurgerIngredient type="bread-bottom"/>
            </div>
    );
  }
}
 
export default Burger;
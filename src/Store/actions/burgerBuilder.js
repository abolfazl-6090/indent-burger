import * as actionTypes from "./actionTypes";
import instance from "../../assets/images/axios-orders";


export const addIngredient = (name) => {
  return (dispatch, getState) => {
    let c = Object.values(getState().BurgerBuilder.ingredients).reduce((prev, current) => prev + current);
    if (c >= 6) {
      dispatch({ type: 'undefined' });
    } else {
      dispatch(addIngrediente(name));
    }
  };
};

export const addIngrediente = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
//////////////////////////////////////////////////////////////////
export const fetchIngredientsFailed = () => {
  return {
      type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
}

export const setIngredients = ( ingredients ) => {
  return {
      type: actionTypes.SET_INGREDIENTS,
      ingredients: ingredients
  };
};

export const initIngredient=()=>{
    return dispatch=>{
      instance.get('/ingredients.json').then((res=>{dispatch(setIngredients(res.data)) })).
      catch(error=>dispatch(fetchIngredientsFailed(error)))
    }
}



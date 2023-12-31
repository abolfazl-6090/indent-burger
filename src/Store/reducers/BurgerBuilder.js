import * as actionType from '../actions/actionTypes'

const initialState={
    ingredients:"",
    error:false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer=(state=initialState,action)=>{ 
 

    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice:state.totalPrice-INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.SET_INGREDIENTS:
            return {...state ,totalPrice:action.ingredients.totalPrice,ingredients:{
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat,
            },totalPrice:4}
        
        case actionType.FETCH_INGREDIENTS_FAILED: 
            return{...state,error:true}

           
        default:return state
    }

}


export default reducer


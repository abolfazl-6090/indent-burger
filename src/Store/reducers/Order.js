import * as actionType from '../actions/actionTypes'

const initialState={
    orders:[],
    loading:false
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.PURCHASE_BURGER_SUCCESS:
            let newOrder ={...action.orderData , id:action.orderId}
            return{...state,loading:false,orders:state.orders.concat(newOrder)}
        case actionType.FETCH_INGREDIENTS_FAILED:
            return{ 
                ...state,
                loading: false,

            }
        
        case actionType.PURCHASE_BURGER_START:
                return {
                    ...state,
                    loading: true
                }
        case actionType.FETCH_ORDERS_START:
            return{
                ...state,
                loading:true
            }
        case actionType.FETCH_ORDERS_SUCCESS:

            return{
                ...state,
                orders:action.orders
            }


        default: return state
    }
}

export default reducer;


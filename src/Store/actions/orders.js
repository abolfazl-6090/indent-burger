import * as actionTypes from './actionTypes'
import instance from '../../assets/images/axios-orders';



export const purchaseBurgerSuccess = ( id, orderData ) => {  

    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData : orderData
    };
};

export const purchaseBurgerFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return (dispatch)=>{
   
         instance
        .post("/orders.json", orderData)
       .then((response) => {
          dispatch(purchaseBurgerSuccess(response.data.name,orderData))  
         window.location.replace('/')
        })
        .catch((error) => {
            dispatch(purchaseBurgerFail(error)) 
        });  
    dispatch( purchaseBurgerStart() );
    }
    
};
//////////////////////////////////////////////////////////////
 const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

 const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

 const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch=>{
        fetchOrdersStart()
        instance
        .get("/orders.json")
        .then(({data}) => {
            
          const fetchedOrders = [];
          for (let key in data) {
            fetchedOrders.push({...data[key],id:key});
            }
          
         dispatch(fetchOrdersSuccess(fetchedOrders))   
        })
        .catch((error) => {
         dispatch(fetchOrdersFail(error))
        
      }
        );

    }
}
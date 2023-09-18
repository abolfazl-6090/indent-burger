import React, { Component } from "react";
import Order from "../../components/Order/Order";
import instance from "../../assets/images/axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {connect} from 'react-redux'
import {fetchOrders} from '../../Store/actions/index'
import Spinner from "../../components/Ul/Spinner/spinner";

class Orders extends Component {

  state={error:false}

  componentDidMount(){
    this.props.onFetchOrders()
  }

  render() {
  
    let orders=<Spinner/>

    if(!this.props.loading){
      orders= this.props.orders.map((order)=> <Order key={order.id}  ingredients={order.ingredients} price={order.price}  />)
    }

    return (
      <>
       {orders}
      </>
    );
  }
}


const mapStateToProps=(state)=>{
  return{
    orders:state.Order.orders,
    loading:state.Order.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onFetchOrders:()=>{dispatch(fetchOrders())}
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,instance));



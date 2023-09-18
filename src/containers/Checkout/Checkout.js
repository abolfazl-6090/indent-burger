import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Outlet, redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { Navigate } from "react-router-dom";

class Checkout extends Component {

  // constructor() {    
  //   super()
  //   this.state=Object.fromEntries(new URLSearchParams(window.location.search))
  //   for (let key in this.state) {
  //     this.state[key] = +this.state[key]; // +obj[key] : Number(obj[key])
  //    } 
  //   this.coppy={...this.state} 
  //   delete this.coppy.price 
  // }



render() {   
 
let summary=<Navigate to='/' />



    if(this.props.ings){
      summary=(<div>
                  <CheckoutSummary ingredients={this.props.ings} />
                  <Outlet />
              </div>)
    }
 
    return (summary
     
    );
  }
}

const a=(state)=>{
  return {
    ings:state.BurgerBuilder.ingredients,
    ttP:state.BurgerBuilder.totalPrice
  }
}


export default connect(a,null)(Checkout) ;

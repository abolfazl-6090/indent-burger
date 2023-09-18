

import React from "react";
import Button from "../../components/Ul/Button/Button";
import classes from "./ContactData.module.css";
import { useState } from "react";
import { useOutletContext,useNavigate } from "react-router";

import Spinner from "../../components/Ul/Spinner/spinner";
import Backdrops from "../../components/Ul/Backdrop/Backdrop";
import Input from "../../components/Ul/Input/input";
import { connect } from "react-redux";
import * as actions from '../../Store/actions/index'

const ContactData = (props) => {
  const [state, setState] = useState({
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
              required: true,
              minLength: 3,
              maxLength: 16,
              string:true
          },
          valid: false,
          touched: false
        },
        address: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Address '
            },
            value: '', 
            validation: {
              required: true,
              minLength: 5,
              maxLength: 16,
              string:true
          },
          valid: false,
          touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
              required: true,
              minLength: 5,
              maxLength: 5,
              number:true
          },
          valid: false,
          touched: false
        },
        country: {
          elementType: 'select',
          elementConfig: {
              options: [ 
                { value: 'unitedStates', displayValue: 'United States' },
                  { value: 'canada', displayValue: 'Canada' }     
              ]
          },
            value: 'unitedStates',
            validation: {
              required: false
          },
          valid: true,
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
               
            },
            value: '',
            validation: {
              required: true
              ,email:true
          },
          valid: false,
          touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                ]
            },
            value: 'fastest',
            validation: {
              required: false},
            valid: true
        }
    },
  
   
});




const inputChangedHandler=(event,type) => {

  const thingsCoppy = {...state.orderForm};

  const thingsInThingsCoppy = {...thingsCoppy[type]};
  thingsInThingsCoppy.value = event.target.value;


  thingsInThingsCoppy.touched=true

   thingsInThingsCoppy.valid=checkValidity(thingsInThingsCoppy.value,thingsCoppy[type].validation)

   thingsCoppy[type]=thingsInThingsCoppy

  let formIsValid = true;
  for (let inputIdentifier in thingsCoppy) {
      formIsValid = thingsCoppy[inputIdentifier].valid && formIsValid;}
    
  newSetState({formIsValid:formIsValid})
 

  setState((prevState)=>({...prevState,orderForm:thingsCoppy}))
}

const [newState,newSetState]=useState({formIsValid:false})


let checkValidity=(value,rules)=>{


    let isValid=true

    if (rules.required){
      isValid = value.trim() !== ''&&isValid
    }
    if(rules.minLength){
      isValid =value.length>=rules.minLength&&isValid
    }
    if(rules.maxLength){
      isValid=value.length<=rules.maxLength&&isValid
    }
    if(rules.number){

      if(isNaN(value)){
          isValid=false}
    }
    if(rules.email){
      if(value=='@gmail.com'){
        isValid=false
      }
      let c=value.endsWith ('@gmail.com')
        if(!c){
          isValid=false
        }
    }
    if(rules.string){
      if(!isNaN(value)){
        isValid=false}
    }

return isValid
   
}




let orderHandler=()=> { 
  window.event.preventDefault();
  let formData={} 
  for(let key in state.orderForm){
   formData[key]=state.orderForm[key].value
  }
   
    //  setState((prevState)=>({...prevState,
    //    loading:true
    //  }));
     const order = {
       ingredients: props.ingredients,
       price: props.ttP,
       orderData: formData
     };
    props.onOrderBurger(order)
   
   };





  let formElementsArray =[]

  for(let key in state.orderForm){
    formElementsArray.push({
      id: key,
      config: state.orderForm[key]
    })
  }



  let form = (
    <form>
     {formElementsArray.map(obj=>{  return <Input 
          touched={obj.config.touched}
          changed={(event) => {inputChangedHandler(event,obj.id)}}
          elementType={obj.config.elementType}
          elementConfig={obj.config.elementConfig} 
          key={obj.id}
          invalid={!obj.config.valid} 
          shouldValidate
          value={obj.config.value} />})}
      <Button btnType="Success" clicked={orderHandler} isDisable={!newState.formIsValid} >Order</Button>
    </form>
  );

  if(props.loading){ 
    form=<>
  <Backdrops show/> <Spinner/>
 
    </>}

  return (
    <div className={classes.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};



const mapStateToProps=(state)=>{
  return{
    ingredients:state.BurgerBuilder.ingredients,
    ttP:state.BurgerBuilder.totalPrice,
    loading:state.Order.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      onOrderBurger:(order)=>{dispatch(actions.purchaseBurger(order))}
  }
}

 ;

 export default connect(mapStateToProps,mapDispatchToProps)(ContactData)  

 
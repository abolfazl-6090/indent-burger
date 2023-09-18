import React,{Component} from "react";
import Aux from "../../hoc/Auxx/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Ul/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import instance from "../../assets/images/axios-orders";
import Spinner from "../../components/Ul/Spinner/spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";


import * as burgerBuilderActions from '../../Store/actions/index'


////////////////////////////////////////

class BurgerBuilder extends Component {
    

    state = {
        purchasing: false,
}

componentDidMount(){
    this.props.onInitIngredients()
}
   
   
    updatePurchaseState(ingredients) {
       
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
         
        return sum > 0;
    }
   

     purchaseHandler =()=> {
        this.setState({purchasing:true})
    }

    purchaseCancelHandler =()=> {
        this.setState({ purchasing: false });
    }

    render() { 


        const disabledInfo = {
            ...this.props.ings
        };
           
        for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key]<=0 
        }
 

let burger=this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

let orderSummary=null

         if (this.props.ings) {
           burger = (
                 <Aux>
                     <Burger ingredients={this.props.ings} />
                     <BuildControls
                         ingredientAdded={this.props.onIngredientAdded}
                         ingredientRemoved={this.props.onIngredientRemoved}
                         disabled={disabledInfo}
                         purchasable={this.updatePurchaseState(this.props.ings)}
                         price={this.props.ttP}
                         ordered={this.purchaseHandler}/>
                 </Aux>
             );
             orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.ttP}
                purchaseCancelled={this.purchaseCancelHandler}
              />     
        }      
    
            
        return (
   
        <Aux>
        
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger} 
        </Aux>
    )
        }   
}

////////////////////////////////////////////////////////      
const mapStateToProps =(state)=>{
    return{
        purch:state.BurgerBuilder.purchasable,
        ings:state.BurgerBuilder.ingredients,
        ttP:state.BurgerBuilder.totalPrice,
        error:state.BurgerBuilder.error
    }
} 

const mapDispatchToProps =(dispatch)=>{
    return {
        onIngredientAdded:(ingName)=>{dispatch(burgerBuilderActions.addIngredient(ingName))},
        onIngredientRemoved:(ingName)=>{dispatch(burgerBuilderActions.removeIngredient(ingName))},
        enabalePurchasable:(o)=>{dispatch({type:'ENABLE_PURCHASABLE',enable:o})},
        onInitIngredients:()=>{dispatch(burgerBuilderActions.initIngredient())}
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,instance))

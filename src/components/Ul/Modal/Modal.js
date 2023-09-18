import React, { Component } from "react";
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxx/Auxx";


class Modal extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
  
render(){

    return(
        <Aux>
            <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
            <div className={classes.Modal} style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-50em)',
                opacity: this.props.show ? '1' : '0'}}>
            {this.props.children}
            </div>
        </Aux>)
}
};

export default Modal;


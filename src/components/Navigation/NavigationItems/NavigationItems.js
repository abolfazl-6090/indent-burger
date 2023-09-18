import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

// active={true} is active

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
     <NavigationItem link="/">Burger Builder</NavigationItem>
     <NavigationItem link="orders">Checkout</NavigationItem>
    </ul>
);




export default NavigationItems;


import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrops from "../../../Ul/Backdrop/Backdrop";
import Aux from "../../../../hoc/Auxx/Auxx";


const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrops show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;

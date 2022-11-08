import React from "react";
import classes from "./Card-Button.module.css";
import CartIcon from "../Cart/Card_Icon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{"3"}</span>
    </button>
  );
};

export default HeaderCartButton;

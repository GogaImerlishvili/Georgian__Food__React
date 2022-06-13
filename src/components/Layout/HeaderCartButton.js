import React from "react";
import classes from "./HeaderCartButton.module.css";
import { TiShoppingCart } from "react-icons/ti";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <TiShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

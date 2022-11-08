import React from "react";
import MealImage from "../../Resourses/imgs/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./Card-Button";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <HeaderCartButton type="submit" onClick="onClick" />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="Dilicious Food "></img>
      </div>
    </React.Fragment>
  );
};

export default Header;

import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./Meals_Summary";

const Meal = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meal;

import classes from "./MealItems.module.css";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.Description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItems;

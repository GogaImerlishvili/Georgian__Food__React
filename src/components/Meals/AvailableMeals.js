import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    description:
      "Khinkali (Georgian: ხინკალი) is a very popular Georgian dumpling made of twisted knobs of dough, stuffed with meat and spices",
    price: 22.99,
  },
  {
    id: "m2",
    name: "khachapuri",
    description:
      "This simple cheese bread known as khachapuri is the most famous dish in Georgia. It is traditionally topped with melted cheese, eggs and butter.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pkhali",
    description:
      "Pkhali (Georgian: ფხალი) is a traditional Georgian dish of chopped and minced vegetables, made of cabbage, eggplant, spinach, beans, beets and combined ",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Churchkhela",
    description:
      "The main ingredients are grape must, nuts, and flour. Almonds, walnuts, hazelnuts ",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

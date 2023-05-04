import { useContext, useEffect, useState } from "react";
import NewsContext from "../../contexts/NewsContext";
import styles from "./Recipes.module.css";

export default function Recipes() {
  const { country } = useContext(NewsContext);

  // const [codeFood, setCodeFood] = useState(null);
  const [food, setFood] = useState(null);

  const handleRecipe = (data) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`)
      .then((response) => response.json())
      .then((res) => setFood(res.meals[0]));
  };

  const handleCodeFood = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.food}`
    )
      .then((response) => response.json())
      .then((data) => handleRecipe(data.meals[0].idMeal));
    // .then((data) => console.log(data.meals))
  };

  useEffect(() => {
    handleCodeFood();
  }, []);

  return (
    <>
      <div> RECIPES </div>
      {country.food}
      {food && (
        <div className={styles.recipesContainer}>
          <h1>Name: {food.strMeal}</h1>
          <h2>Category: {food.strCategory}</h2>
          <p>Instructions: {food.strInstructions}</p>
        </div>
      )}
    </>
  );
}

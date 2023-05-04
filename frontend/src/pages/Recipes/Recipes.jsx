import { useContext, useEffect, useState } from "react";
import NewsContext from "../../contexts/NewsContext";
import styles from "./Recipes.module.css";

export default function Recipes() {
  const { country } = useContext(NewsContext);

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
  };

  useEffect(() => {
    handleCodeFood();
  }, []);

  return (
    <div className={styles.container}>
      {food && (
        <div className={styles.recipesContainer}>
          <h1 className={styles.name}>Name: {food.strMeal}</h1>
          <h2 className={styles.category}>Category: {food.strCategory}</h2>
          <p>
            <b>Instructions:</b> {food.strInstructions}
          </p>
          <img src={food.strMealThumb} alt="YouTube Video" />
          <a href={food.strYoutube} target="_blank" rel="noopener noreferrer">
            Click here to watch the video on YouTube
          </a>
        </div>
      )}
    </div>
  );
}

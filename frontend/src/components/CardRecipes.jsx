import { React, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./CardRecipes.module.css";

function CardRecipes({ changeInput, countryFood }) {
  const [recipe, setRecipe] = useState();

  const getFood = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryFood}`
      )
      .then((response) => setRecipe(response.data.meals[0]));
  };
  useEffect(getFood, [changeInput]);

  return (
    <div className={styles.cardRecipes}>
      <div className={styles.recipesContainer}>
        {recipe && (
          <div className={styles.displayRecipes} style={{ padding: "15px" }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <h3>{recipe.strInstructions}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
CardRecipes.propTypes = {
  countryFood: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default CardRecipes;

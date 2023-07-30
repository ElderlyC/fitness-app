import React, { useState } from "react";
import HomeButton from "../../components/HomeButton";
import styles from "./RandomMeal.module.css";

const RandomMeal = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeCount, setRecipeCount] = useState(0);
  const [error, setError] = useState(false);
  if (recipeCount === 9) {
    setRecipeCount(0);
  }

  const handleSearch = async (e) => {
    console.log(recipeCount);
    e.preventDefault();
    const pantryItems = e.target.elements.pantryItems.value;
    const APP_ID = "9f76888c";
    const APP_KEY = "a010bd9e2bf2be1430f421dbb67c9ab0";
    const url = `https://api.edamam.com/search?q=${pantryItems}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      setError(false);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipes(data.hits.slice(recipeCount, recipeCount + 3));
      setRecipeCount((prevCount) => prevCount + 3);
    } catch (error) {
      setError(true);
      console.error("There was a problem fetching data:", error);
    }
  };

  return (
    <div>
      <HomeButton />
      <h2>Random Meal Generator</h2>

      <form onSubmit={handleSearch}>
        <label htmlFor="pantryItems">Enter items in your pantry:</label>
        <input
          id="pantryItems"
          name="pantryItems"
          placeholder="e.g. tomato chicken onion"
          size="50"
          required
        ></input>
        <button type="submit">Generate!</button>
      </form>
      {error && <p>Too many requests! (Wait a bit)</p>}
      <div className={recipes}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

const Recipe = ({ title, image, ingredients, url }) => {
  return (
    <div className={styles.recipeContainer}>
      <img className={styles.recipeImage} src={image} alt={title} />
      <div className={styles.recipeDetails}>
        <h2 className={styles.recipeTitle}>{title}</h2>
        <div className={styles.recipeIngredients}>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read instructions: {url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;

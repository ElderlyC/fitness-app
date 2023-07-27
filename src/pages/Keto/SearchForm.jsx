// SearchForm.js
import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [foodItem, setFoodItem] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(foodItem, weight);
    setFoodItem("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <label htmlFor="food">Food: </label>
        <input
          id="food"
          type="text"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          placeholder="Enter food item"
          required
        />
      </>
      <>
        <label htmlFor="weight">Weight: </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in grams"
          required
        />
      </>

      <button type="submit">Add</button>
    </form>
  );
};

export default SearchForm;

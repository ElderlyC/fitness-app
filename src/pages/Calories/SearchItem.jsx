import React, { useState } from "react";

export default function SearchItem({ onSearch, deleteLast, onAddCustom }) {
  const [foodItem, setFoodItem] = useState();
  const [quantity, setQuantity] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [fat, setFat] = useState();

  const [toggleCustom, setToggleCustom] = useState(false);

  const addFoodHandler = (event) => {
    event.preventDefault();
    setFoodItem("");
    setQuantity("");
    if (toggleCustom) {
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");
    }
    if (toggleCustom) {
      onAddCustom(foodItem, quantity, calories, protein, carbs, fat);
      return;
    }
    onSearch(foodItem, quantity);
  };

  const handleDeleteLast = () => {
    deleteLast();
  };

  const handleToggleCustom = () => {
    setToggleCustom((prev) => !prev);
  };

  return (
    <div style={{ marginTop: -15 }}>
      <form onSubmit={addFoodHandler}>
        <input
          id="foodInput"
          type="text"
          placeholder={
            toggleCustom ? "Enter a custom food item" : "Enter a food item"
          }
          value={foodItem}
          onChange={(event) => setFoodItem(event.target.value)}
          required
        />
        <input
          id="quantityInput"
          type="number"
          placeholder="Enter quantity in grams"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required={!toggleCustom}
        />
        {toggleCustom && (
          <div style={{ width: 600 }}>
            <div>
              <input
                style={{ width: 140 }}
                id="calorieInput"
                type="number"
                placeholder="Enter calories"
                required
                value={calories}
                onChange={(event) => setCalories(event.target.value)}
              />
              <input
                style={{ width: 140 }}
                id="proteinInput"
                type="number"
                placeholder="Enter protein in grams"
                value={protein}
                onChange={(event) => setProtein(event.target.value)}
              />

              <input
                style={{ width: 140 }}
                id="carbsInput"
                type="number"
                placeholder="Enter carbs in grams"
                value={carbs}
                onChange={(event) => setCarbs(event.target.value)}
              />
              <input
                style={{ width: 140 }}
                id="fatInput"
                type="number"
                placeholder="Enter fat in grams"
                value={fat}
                onChange={(event) => setFat(event.target.value)}
              />
            </div>
          </div>
        )}
        <button type="submit">Add</button>
        <button type="button" onClick={handleDeleteLast}>
          Delete Last
        </button>
        <button type="button" onClick={handleToggleCustom}>
          {toggleCustom ? "Standard" : "Custom"}
        </button>
      </form>
    </div>
  );
}

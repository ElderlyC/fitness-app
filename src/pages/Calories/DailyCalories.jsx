import React, { useState } from "react";
import HomeButton from "../../components/HomeButton";
import SearchItem from "./SearchItem";
import SearchTable from "./SearchTable";
import { useEffect } from "react";

const DailyCalories = () => {
  const [itemTable, setItemTable] = useState(
    () => JSON.parse(localStorage.getItem("calories")) || []
  );
  const [error, setError] = useState(false);

  const handleSearch = (foodItem, quantity) => {
    const baseUrl = "https://api.edamam.com/api/food-database/v2/parser";
    const appId = "68a8fbab";
    const appKey = "f0a97179f096105763b71df21f013f76";

    const url = `${baseUrl}?app_id=${appId}&app_key=${appKey}&ingr=${foodItem}&nutrition-type=cooking`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setError(false);
        console.log(data);
        const nutrients = data.parsed[0].food.nutrients;
        console.log(nutrients);
        const multiplier = quantity / 100;

        const calories = (nutrients.ENERC_KCAL * multiplier).toFixed(0);
        const protein = (nutrients.PROCNT * multiplier).toFixed(1);
        const fat = (nutrients.FAT * multiplier).toFixed(1);
        //total carbs - fibre
        const carbs = (
          (nutrients.CHOCDF - nutrients.FIBTG) *
          multiplier
        ).toFixed(1);

        const newSearch = { foodItem, quantity, calories, protein, carbs, fat };
        setItemTable((prevTable) => [...prevTable, newSearch]);
      })
      // Handle errors
      .catch((error) => {
        // Handle errors
        setError(true);
        console.log(error);
      });
  };

  const handleAddCustom = (
    foodItem,
    quantity,
    calories,
    protein,
    carbs,
    fat
  ) => {
    const newCustom = { foodItem, quantity, calories, protein, carbs, fat };
    setItemTable((prevTable) => [...prevTable, newCustom]);
  };

  const handleDelete = () => {
    if (itemTable[0]) {
      setItemTable((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    localStorage.setItem("calories", JSON.stringify(itemTable));
  }, [itemTable]);

  return (
    <div>
      <HomeButton />
      <h2>Calorie Calculator</h2>
      <SearchItem
        onSearch={handleSearch}
        deleteLast={handleDelete}
        onAddCustom={handleAddCustom}
      />
      {error && <p>Invalid item! Try make a custom item instead</p>}
      <SearchTable table={itemTable} />
    </div>
  );
};

export default DailyCalories;

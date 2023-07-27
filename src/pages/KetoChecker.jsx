import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import SearchForm from "./Keto/SearchForm";
import SearchHistory from "./Keto/SearchHistory";

const KetoChecker = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (foodItem, weight) => {
    const baseUrl = "https://api.edamam.com/api/food-database/v2/parser";
    const appId = "68a8fbab";
    const appKey = "f0a97179f096105763b71df21f013f76";

    const url = `${baseUrl}?app_id=${appId}&app_key=${appKey}&ingr=${foodItem}&nutrition-type=cooking`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const nutrients = data.parsed[0].food.nutrients;
        const newSearch = { foodItem, weight, nutrients };
        setSearchHistory((prevHistory) => [...prevHistory, newSearch]);
      })
      // Handle errors
      .catch((error) => {
        // Handle errors
        console.log("error");
        console.log(error);
      });
  };

  return (
    <div>
      <HomeButton />
      <h2>Keto Checker</h2>
      <div>
        <SearchForm onSearch={handleSearch} />
        <SearchHistory history={searchHistory} />
      </div>
      <div>
        <p style={{ marginTop: 45, fontSize: 14, fontStyle: "italic" }}>
          Food is considered keto-friendly when its net carbs are below a
          certain threshold (20g per day). <br /> Net carbs are calculated as
          Total Carbs - Fibre.
        </p>
      </div>
    </div>
  );
};

export default KetoChecker;

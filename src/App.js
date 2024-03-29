import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import WeightTracker from "./pages/Weight/WeightTracker";
import BMICalculator from "./pages/BMICalculator";
import DailyCalories from "./pages/Calories/DailyCalories";
import RandomMeal from "./pages/Random/RandomMeal";
import KetoChecker from "./pages/Keto/KetoChecker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Maintenance-Calories-Calculator"
            element={<Maintenance />}
          />
          <Route path="/Weight-Tracker" element={<WeightTracker />} />
          <Route path="/BMI-Calculator" element={<BMICalculator />} />
          <Route path="/Calorie-Calculator" element={<DailyCalories />} />
          <Route path="/Random-Meal-Generator" element={<RandomMeal />} />
          <Route path="/Keto-Checker" element={<KetoChecker />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

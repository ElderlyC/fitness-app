import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import WeightTracker from "./pages/WeightTracker";
import BMICalculator from "./pages/BMICalculator";
import DailyCalories from "./pages/DailyCalories";
import RandomMeal from "./pages/RandomMeal";
import KetoChecker from "./pages/KetoChecker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route
              path="Maintenance-Calories-Calculator"
              element={<Maintenance />}
            />
            <Route path="Weight-Tracker" element={<WeightTracker />} />
            <Route path="BMI-Calculator" element={<BMICalculator />} />
            <Route path="Daily-Calorie-Tracker" element={<DailyCalories />} />
            <Route path="Random-Meal-Generator" element={<RandomMeal />} />
            <Route path="Keto-Checker" element={<KetoChecker />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

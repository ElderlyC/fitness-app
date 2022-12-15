import React, { useState } from "react";
import HomeButton from "../components/HomeButton";

const Maintenance = () => {
  const [cals, setCals] = useState();
  const CalculateCals = () => {
    // const array = [weight, height, age, activity].map((e) => {
    //   document.getElementById(e).value;
    // });
    // ^ more concise possible?
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const activity = document.getElementById("activity").value;
    if (document.getElementById("male").checked === true) {
      console.log("male calculated");
      console.log(weight, "a");
      setCals(
        Math.round(activity * (10 * weight + 6.25 * height - 5 * age + 5))
      );
    } else {
      console.log("female calculated");
      setCals(
        Math.round(activity * (10 * weight + 6.25 * height - 5 * age - 161))
      );
    }
  };
  const afterSubmission = (event) => {
    event.preventDefault();
  };
  return (
    // Mifflin-St Jeor Equation:
    // For men:
    // BMR = 10W + 6.25H - 5A + 5
    // For women:
    // BMR = 10W + 6.25H - 5A - 161
    <div>
      <HomeButton />
      <form onSubmit={afterSubmission} style={{ fontSize: 20 }}>
        <h2>Maintenance Calories Calculator</h2>
        <fieldset>
          <legend>Select your Gender</legend>
          <div>
            <input
              id="male"
              type="radio"
              defaultChecked="true"
              name="gender"
              value="male"
            />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input id="female" type="radio" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Select Your Age</legend>
          <input id="age" type="number" min="0" max="122" required />
        </fieldset>
        <fieldset>
          <legend>Enter Your Weight</legend>
          <input id="weight" type="number" min="2" max="635" required />
          <span id="units">kg</span>
        </fieldset>
        <fieldset>
          <legend>Enter Your Height</legend>
          <input id="height" type="number" min="46" max="272" required />
          <span id="units">cm</span>
        </fieldset>
        <fieldset>
          <legend>Select Your Activity Level</legend>
          <select id="activity">
            <option value="1">BMR (Basal Metabolic Rate)</option>
            <option value="1.2">Little to No Exercise</option>
            <option value="1.375">Exercise 1-3 times/week</option>
            <option value="1.4625">Exercise 4-5 times/week</option>
            <option value="1.55">
              Daily Exercise/Intense Exercise 3-4 times/week
            </option>
            <option value="1.725">Intense Exercise 6-7 times/week</option>
            <option value="1.9">
              Very Intense Exercise Daily/Physical Job
            </option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Click this button to Calculate</legend>
          <button
            type="submit"
            onClick={CalculateCals}
            style={{ fontSize: 12, width: 170, height: 30 }}
          >
            Seems kinda unnecessary to have this many fieldsets
          </button>
        </fieldset>
        {cals &&
          document.getElementById("weight").value >= 2 &&
          document.getElementById("height").value >= 46 &&
          document.getElementById("age").value >= 0 && (
            <div style={{ width: 500, margin: "auto" }}>
              <p>
                <span id="l">Your Maintenance Calories: </span>
                <span id="r">{cals} calories/day</span>
              </p>
              <div style={{ clear: "both" }}></div>
              <p>
                <span id="l">Weight Loss: </span>
                <span id="r">{cals - 250} calories/day</span>
              </p>
              <div style={{ clear: "both" }}></div>
              <p>
                <span id="l">Fast Weight Loss: </span>
                <span id="r">{cals - 500} calories/day</span>
              </p>
            </div>
          )}
      </form>
    </div>
  );
};

export default Maintenance;

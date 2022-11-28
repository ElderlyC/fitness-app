import React from "react";
import Title from "../components/Title";

const Maintenance = () => {
  return (
    // Mifflin-St Jeor Equation:
    // For men:
    // BMR = 10W + 6.25H - 5A + 5
    // For women:
    // BMR = 10W + 6.25H - 5A - 161

    <div>
      <Title></Title>
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
          <label for="male">Male</label>
        </div>

        <div>
          <input id="female" type="radio" name="gender" value="female" />
          <label for="female">Female</label>
        </div>

        <input placeholder="e.g. Ladyboy" />
      </fieldset>

      <a href="/">Home</a>
    </div>
  );
};

export default Maintenance;

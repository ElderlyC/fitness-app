import React from "react";
import HomeButton from "../components/HomeButton";

const Maintenance = () => {
  return (
    // Mifflin-St Jeor Equation:
    // For men:
    // BMR = 10W + 6.25H - 5A + 5
    // For women:
    // BMR = 10W + 6.25H - 5A - 161

    <div>
      <HomeButton></HomeButton>
      <h2 style={{ margin: 20, marginTop: 30 }}>
        Maintenance Calories Calculator
      </h2>
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
      </fieldset>

      <fieldset>
        <legend>Select Your Age</legend>
        <input type="number" style={{ fontSize: 32, width: 70 }} />
      </fieldset>
      <fieldset>
        <legend>Enter Your Weight</legend>
        <input type="number" style={{ fontSize: 32, width: 70 }} />
        <span style={{ padding: -50 }}>kg</span>
      </fieldset>
      <fieldset>
        <legend>Enter Your Height</legend>
        <input type="number" style={{ fontSize: 32, width: 70 }} />
        <span style={{ padding: -50 }}>cm</span>
      </fieldset>
      <fieldset>
        <legend>Click this button to Calculate</legend>
        <button style={{ fontSize: 12, width: 170, height: 30 }}>
          Seems kinda unnecessary to have this many fieldsets
        </button>
      </fieldset>
      <button style={{ height: 30, width: 30, padding: 0, margin: 0 }}>
        <a
          href="/"
          style={{
            height: 30,
            width: 30,

            padding: 0,
            margin: 0,
          }}
        >
          <div style={{ height: 30, width: 30, textAlign: "center" }}>Hi</div>
        </a>
      </button>
    </div>
  );
};

export default Maintenance;

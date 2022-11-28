import React from "react";
import Title from "../components/Title";
import SectionButton from "../components/SectionButton";
import icon1 from "../icons/+-.png";
import icon2 from "../icons/mealCalories.png";
import icon3 from "../icons/weighttrack.PNG";
import icon4 from "../icons/randommeal.PNG";
import icon5 from "../icons/bmi.PNG";
import icon6 from "../icons/keto.png";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Title></Title>

      <div id="container" style={{ columnCount: 3, rowCount: 2 }}>
        <SectionButton
          buttonName="Maintenance Calories Calculator"
          link="Maintenance-Calories-Calculator"
          icon={icon1}
        ></SectionButton>
        <SectionButton
          buttonName="Meal Calories Calculator"
          link="Meal-Calories-Calculator"
          icon={icon2}
        ></SectionButton>
        <SectionButton
          buttonName="Weight Tracker"
          link="Weight-Tracker"
          icon={icon3}
        ></SectionButton>
        <SectionButton
          buttonName="Random Meal Generator"
          link="Random-Meal-Generator"
          icon={icon4}
        ></SectionButton>
        <SectionButton
          buttonName="BMI Calculator"
          link="BMI-Calculator"
          icon={icon5}
        ></SectionButton>
        <SectionButton
          buttonName="Keto Checker"
          link="Keto-Checker"
          icon={icon6}
        ></SectionButton>
      </div>
    </div>
  );
};

export default Home;

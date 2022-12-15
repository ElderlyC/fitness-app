import React from "react";
import Title from "../components/Title";
import SectionButton from "../components/SectionButton";
import icon1 from "../icons/+-.png";
import icon2 from "../icons/mealCalories.png";
import icon3 from "../icons/weighttrack.png";
import icon4 from "../icons/randommeal.png";
import icon5 from "../icons/bmi.png";
import icon6 from "../icons/keto.png";

const Home = () => {
  return (
    <div>
      <Title></Title>
      <div id="container" style={{ columnCount: 3, rowCount: 2 }}>
        <SectionButton
          buttonName="Maintenance Calories Calculator"
          link="Maintenance-Calories-Calculator"
          icon={icon1}
          textPosition={4}
        />
        <SectionButton
          buttonName="Daily Calorie Tracker"
          link="Daily-Calorie-Tracker"
          icon={icon2}
          textPosition={18}
        />
        <SectionButton
          buttonName="Weight Tracker"
          link="Weight-Tracker"
          icon={icon3}
          textPosition={15}
        />
        <SectionButton
          buttonName="Random Meal Generator"
          link="Random-Meal-Generator"
          icon={icon4}
          textPosition={22}
        />
        <SectionButton
          buttonName="BMI Calculator"
          link="BMI-Calculator"
          icon={icon5}
          textPosition={22}
        />
        <SectionButton
          buttonName="Keto Checker"
          link="Keto-Checker"
          icon={icon6}
          textPosition={22}
        />
      </div>
    </div>
  );
};

export default Home;

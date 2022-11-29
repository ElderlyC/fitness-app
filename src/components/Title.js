import React from "react";

const Title = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 90,
          margin: 10,
          marginTop: 40,
          letterSpacing: 10,
          font: "3em Fira Sans sans-serif",
        }}
      >
        kiloJoules
      </h1>
      <h3
        style={{
          fontSize: 32,
          margin: 10,
          fontFamily: "Inconsolata",
          fontStyle: "italic",
          fontWeight: 100,
        }}
      >
        A fitness and diet application for tracking and calculations
      </h3>
    </div>
  );
};

export default Title;

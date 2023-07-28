import React from "react";

const HomeButton = () => {
  return (
    <div>
      <button className="homebtn">
        <a
          style={{
            display: "block",
            blockSize: "100%",
            height: 55,
            width: 400,
            padding: 0,
            margin: 0,
          }}
          href="/fitness-app"
        >
          <h1
            style={{
              margin: 0,
              letterSpacing: 10,
              font: "2em Fira Sans sans-serif",
            }}
          >
            kiloJoules
          </h1>
          <h3
            style={{
              fontSize: 7,
              fontFamily: "Inconsolata",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            A fitness and diet application for tracking and calculations
          </h3>
        </a>
      </button>
    </div>
  );
};

export default HomeButton;

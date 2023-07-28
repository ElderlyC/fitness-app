import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <button className="homebtn">
        {/* Use Link component instead of a tag */}
        <Link
          style={{
            display: "block",
            blockSize: "100%",
            height: 55,
            width: 400,
            padding: 0,
            margin: 0,
          }}
          to="/"
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
        </Link>
      </button>
    </div>
  );
};

export default HomeButton;

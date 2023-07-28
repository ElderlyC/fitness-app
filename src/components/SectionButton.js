import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SectionButton = ({ link, buttonName, icon, textPosition }) => {
  return (
    <div>
      <button
        className="navButton"
        buttonName={buttonName}
        link={link}
        icon={icon}
        style={{
          backgroundImage: `url(${icon})`,
          position: "relative",
        }}
      >
        {/* Use Link component instead of a tag */}
        <Link style={{ display: "block", blockSize: "100%" }} to={`${link}`}>
          {" "}
        </Link>
        <div style={{ position: "absolute", bottom: textPosition, width: 234 }}>
          {buttonName}
        </div>
      </button>
    </div>
  );
};

export default SectionButton;

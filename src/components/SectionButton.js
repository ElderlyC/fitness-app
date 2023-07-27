import React from "react";
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
        <a style={{ display: "block", blockSize: "100%" }} href={link}>
          {" "}
        </a>
        <div style={{ position: "absolute", bottom: textPosition, width: 234 }}>
          {buttonName}
        </div>
      </button>
    </div>
  );
};

export default SectionButton;

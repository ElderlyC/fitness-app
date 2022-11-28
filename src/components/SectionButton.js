import React from "react";
const SectionButton = ({ link, buttonName, icon }) => {
  return (
    <div>
      <img src={icon} style={{ maxHeight: 100 }} />
      <a href={link}>{buttonName}</a>
    </div>
  );
};

export default SectionButton;

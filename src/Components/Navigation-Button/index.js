import React from "react";
import "./style.css";

const NavigationButton = ({ buttonProperties }) => {
  return (
    <>
      {buttonProperties.map( properties => (
        <button
          className="navigation-button"
          style={{ backgroundColor: properties.hexColor }}
          key={properties.name}
        >
          {properties.name}
        </button>
      ))}
      ;
    </>
  );
};

export default NavigationButton;

import React from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import "./style.css";

const NavigationButton = ({ buttonProperties }) => {
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    e.target.style.background = "#f3f3f3";
  };

  const handleMouseLeave = (e) => {
    switch (e.target.id) {
      case "Projects":
        e.target.style.background = "#eea302";
        break;
      case "Resume":
        e.target.style.background = "#ff3b24";
        break;
      case "Contact":
        e.target.style.background = "#80d9da";
        break;
    }
  };

  return (
    <>
      {buttonProperties.map((properties) => (
        <button
          className="navigation-button"
          id={properties.name}
          style={{ backgroundColor: properties.hexColor }}
          key={properties.name}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate(`/${properties.name}`)}
        >
          {properties.name}
        </button>
      ))}
    </>
  );
};

export default NavigationButton;

// import React from "react";

// Import useState Hook
// import { useState } from "react";

const Header = ({ isDarkMode, handleClick }) => {
  
  // Array Destructing Assignment
  // const [a, b] = [10, 20];

  // a = 10;
  // b = 20;

  // const [ stateVariable, setterFunction ] = useState(initialValue)
  // const [ isDarkMode, setDarkMode ] = useState(true);
  
  // Helper Function
  // const handleClick = () => {
    
  //   // When we make a State change, this causes our Components
  //   // to re-render.
  //   setDarkMode(!isDarkMode)
  // }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;

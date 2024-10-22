import React from "react";
import { Link , NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
      
    </>
  );
}

export default App;

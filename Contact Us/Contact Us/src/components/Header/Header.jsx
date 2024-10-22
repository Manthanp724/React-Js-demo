import React from "react";
import '../Header/header.css'

const Header = () => {
  return (
    <>
      <div className="Header-bar">
        <div className="logo">Patel</div>

        <div className="headerEle">
        <p>Home</p>
        <p>About</p>
        <p>Service</p>
        </div>
      </div>
    </>
  );
};

export default Header;

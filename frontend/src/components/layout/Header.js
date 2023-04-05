import React from "react";
import "../../styles/components/Header.css";
import logo from "../../images/logo.png";

const Header = (props) => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="" className="logo" />
        <h1 className="header-title">Orion</h1>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./navbar.scss";
const Navbar = ({ side, Setside }) => {
  const [value, setValue] = useState(false);
  console.log("check", value);
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Aravind</div>
      </div>
      <div className={`nav-links ${value ? "height" : "noheight"}`}>
        <a className="links" href="#" target="_blank">
          Home
        </a>

        <a className="links" href="#" target="_blank">
          About
        </a>

        <a className="links" href="#" target="_blank">
          Work
        </a>

        <a className="links" href="#" target="_blank">
          Contact Us
        </a>
      </div>
      <div className="nav-btn" onClick={() => setValue(!value)}>
        <label for="nav-check">
          <span></span>

          <span></span>

          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

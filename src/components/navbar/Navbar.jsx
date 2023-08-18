import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to={"/"}> */}
          <span className="text">fiverr</span>
          <span className="dot">.</span>
          {/* </Link> */}
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test 2</span>
      </div>
    </div>
  );
};

export default Navbar;

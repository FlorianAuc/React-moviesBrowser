import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="left-nav">
        <h2>
          {" "}
          <NavLink to="*">
            <span className="orange-nav">Movie</span>
            <span className="white-nav">Browser</span>
          </NavLink>
        </h2>
      </div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Style">
          <li>Category</li>
        </NavLink>
        <NavLink to="/Mylist">
          <li>My list</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

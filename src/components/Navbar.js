import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navLinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkstyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkstyles} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;

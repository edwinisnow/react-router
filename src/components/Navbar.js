import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
function Navbar() {
  const navLinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkstyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkstyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkstyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkstyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkstyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;

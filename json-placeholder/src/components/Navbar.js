import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/signup">POST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

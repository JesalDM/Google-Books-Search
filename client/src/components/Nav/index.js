import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function Nav() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    //<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="nav nav-tabs">
            <li className="navbar-brand">
                Google Books
            </li>
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Search
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/saved"
                className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >
                Saved
                </Link>
            </li>
        </ul>
    // </nav>
  );
}

export default Nav;
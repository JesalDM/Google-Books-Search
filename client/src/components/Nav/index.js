import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            Google Books
        </a>
        <ul className="nav nav-tabs">
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
                saved
                </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
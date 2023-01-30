import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaLungs } from "react-icons/fa";
import "./MainNavigation.css";
import { useState } from "react";

function MainNavigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <NavLink exact to="/" className="navlogo">
          Yakoo
        </NavLink>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li className="nav_item">
            <NavLink
              to="/"
              onClick={handleClick}
              activeClassName="active"
              className="nav_link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
              to="/auth"
              onClick={handleClick}
              activeClassName="active"
              className="nav_link"
            >
              Auth
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
              to="/personalpage"
              onClick={handleClick}
              activeClassName="active"
              className="nav_link"
            >
              Personal Page
            </NavLink>
          </li>
        </ul>
        <div className="nav_icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;

import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import logo from "./assets/logoexpat.png";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "shownav" : "hidenav"}`}>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/results/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/results/music">Music</NavLink>
          </li>
          <li>
            <NavLink to="/results/images">Pictures</NavLink>
          </li>
          <li>
            <NavLink to="/results/receipts">Recipes</NavLink>
          </li>
        </ul>
        <button className="button" type="button" onClick={handleShowLinks}>
          <span className="burger-bar"> </span>
        </button>
      </nav>
      <img className="logo" src={logo} alt="Logo" />
    </header>
  );
}

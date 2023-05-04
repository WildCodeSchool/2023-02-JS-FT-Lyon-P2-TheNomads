import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "./Header.module.css";
import NewsContext from "./contexts/NewsContext";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const { country } = useContext(NewsContext);

  return (
    <header>
      <nav className={showLinks ? styles.shownav : styles.hidenav}>
        <ul className={styles.navbarlinks}>
          <li className={styles.headerLinks}>
            <NavLink to="/">Home </NavLink>
          </li>
          <li className={styles.headerLinks}>
            <NavLink to="/news">News</NavLink>
          </li>
          <li className={styles.headerLinks}>
            <NavLink to="/music">Music</NavLink>
          </li>
          <li className={styles.headerLinks}>
            <NavLink to="/images">Pictures</NavLink>
          </li>
          <li className={styles.headerLinks}>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
        </ul>
        <button
          className={styles.button}
          type="button"
          onClick={handleShowLinks}
        >
          <span className={styles.burgerbar}> </span>
        </button>
      </nav>
      <img src={country.image} height="50px" alt="country FLag" />
    </header>
  );
}

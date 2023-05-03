import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import countries from "../../assets/countriesList";
import CardInformation from "../../components/CardInformation";
import CardRecipes from "../../components/CardRecipes";
import styles from "./Home.module.css";
// import logo from "../../assets/logo2.png";
import NewsContext from "../../contexts/NewsContext";
import CardImage from "../../components/CardImages";
import CardMusic from "../../components/CardMusic";

export default function Home() {
  const { country, setCountry } = useContext(NewsContext);
  const [dropDownMenu, setShowDropDownMenu] = useState(false);

  const handleDropDownMenu = () => {
    setShowDropDownMenu(!dropDownMenu);
  };

  const handleKeyUp = (event, countrySelected) => {
    if (event.key === "Enter") {
      setCountry(countrySelected);
    }
  };

  const handleClick = (countrySelected) => {
    handleDropDownMenu();
    setCountry(countrySelected);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.homeSubTitle}>Do you miss your country ?</h2>
        <h1 className={styles.homeTitle}>This website is made for you !</h1>
      </div>
      <div className={styles.searchBar}>
        <div
          className={styles.displayCountryName}
          placeholder="Select your country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          onClick={handleDropDownMenu}
          onKeyUp={(e) => handleKeyUp(e)}
          role="button"
          tabIndex="0"
        >
          Select your country
          <div className={styles.buttonDropDownMenu} />
        </div>
        {dropDownMenu && (
          <div className={styles.dropDownMenu}>
            <ul>
              {countries.map((countrySelected) => (
                <li
                  key={countrySelected.id}
                  className={styles.countryOption}
                  onKeyUp={(e) => handleKeyUp(e, countrySelected)}
                  onClick={() => handleClick(countrySelected)}
                  role="menuitem"
                  tabIndex="0"
                >
                  {countrySelected.name} {countrySelected.emoji}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {country && (
        <div className={styles.cardContainer}>
          <Link to="/music">
            <CardMusic />
          </Link>

          <Link to="/news">
            <CardInformation />
          </Link>

          <Link to="/recipes">
            <CardRecipes
              countryCode={country.code}
              changeInput={country.name}
              countryFood={country.food}
            />
          </Link>

          <Link to="/images">
            <CardImage />
          </Link>
        </div>
      )}

      {/* <img className={styles.homeLogo} src={logo} alt="Logo" /> */}
    </div>
  );
}

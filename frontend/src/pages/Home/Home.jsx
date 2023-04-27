import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import countries from "../../assets/countriesList";
import CardInformation from "../../components/CardInformation";
import styles from "./Home.module.css";
import Footer from "../../Footer";
import NewsContext from "../../contexts/NewsContext";

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
  return (
    <div className={styles.mainContainer}>
      {/* {countryFlag && <img className={styles.flag} src={countryFlag} alt="" />} */}
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
          <div className={styles.buttonDropDownMenu} />
        </div>
        {dropDownMenu && (
          <div className={styles.dropDownMenu}>
            <ul>
              {countries.map((countrySelected) => (
                <li // eslint-disable-line
                  key={countrySelected.id}
                  className={styles.countryOption}
                  onKeyUp={(e) => handleKeyUp(e, countrySelected)}
                  onClick={() => setCountry(countrySelected)}
                >
                  {countrySelected.name} {countrySelected.emoji}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* {console.log(country)} */}
      </div>
      {country && (
        <div className={styles.cardContainer}>
          <Link to="/news">
            <CardInformation />
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

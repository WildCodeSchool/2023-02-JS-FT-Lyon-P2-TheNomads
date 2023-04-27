import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import countries from "../../assets/countriesList";
import CardInformation from "../../components/CardInformation";
import styles from "./Home.module.css";
import Footer from "../../Footer";
import NewsContext from "../../contexts/NewsContext";

export default function Home() {
  const { setCountryInformation } = useContext(NewsContext);

  const [countryInput, setCountryInput] = useState("Select your country");
  const [countryEmoji, setCountryEmoji] = useState(null);
  const [dropDownMenu, setShowDropDownMenu] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [countryFlag, setCountryFlag] = useState();

  const changeInput = (name, emoji, code, image) => {
    setCountryInformation(code);
    // setselectedCountry({ name, emoji, code, image });
    setCountryInput(name);
    setCountryEmoji(emoji);
    setCountryCode(code);
    setCountryFlag(image);
  };

  const handleDropDownMenu = () => {
    setShowDropDownMenu(!dropDownMenu);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      setShowDropDownMenu(!dropDownMenu);
    }
  };
  return (
    <div className={styles.mainContainer}>
      {countryFlag && <img className={styles.flag} src={countryFlag} alt="" />}
      <h1>HOME</h1>
      <div className={styles.searchBar}>
        <div
          className={styles.displayCountryName}
          placeholder="Select your country"
          onChange={(e) => {
            setCountryInput(e.target.value);
          }}
          onClick={handleDropDownMenu}
          onKeyUp={(e) => handleKeyUp(e)}
          role="button"
          tabIndex="0"
        >
          {countryInput}
          {countryEmoji}
          <div className={styles.buttonDropDownMenu} />
        </div>
        {dropDownMenu && (
          <div className={styles.dropDownMenu}>
            <ul>
              {countries.map((country) => (
                <li // eslint-disable-line
                  className={styles.countryOption}
                  onKeyUp={(e) => handleKeyUp(e)}
                  onClick={() =>
                    changeInput(
                      country.name,
                      country.emoji,
                      country.code,
                      country.image
                    )
                  }
                >
                  {country.name} {country.emoji}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {countryEmoji && (
        <div className={styles.cardContainer}>
          <Link to="/news">
            <CardInformation
              countryCode={countryCode}
              changeInput={changeInput}
            />
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

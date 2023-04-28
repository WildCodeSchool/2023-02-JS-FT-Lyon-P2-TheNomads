import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import countries from "../../assets/countriesList";
import CardInformation from "../../components/CardInformation";
import CardRecipes from "../../components/CardRecipes";
import styles from "./Home.module.css";
import Footer from "../../Footer";
import logo from "../../assets/logo2.png";
import NewsContext from "../../contexts/NewsContext";

export default function Home() {
  const { setCountryInformation } = useContext(NewsContext);

  const [countryInput, setCountryInput] = useState("Select your country");
  const [countryEmoji, setCountryEmoji] = useState(null);
  const [dropDownMenu, setShowDropDownMenu] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [countryFlag, setCountryFlag] = useState();
  const [countryFood, setCountryFood] = useState();

  const changeInput = (name, emoji, food, code, image) => {
    setCountryInformation(code);
    // setselectedCountry({ name, emoji, code, image });
    setCountryInput(name);
    setCountryEmoji(emoji);
    setCountryCode(code);
    setCountryFlag(image);
    setCountryFood(food);
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
      <div className={styles.titleContainer}>
        <h2 className={styles.homeSubTitle}>Do you miss your country ?</h2>
        <h1 className={styles.homeTitle}>This website is made for you !</h1>
      </div>
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
                      country.food,
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

          <Link to="/results/receipts">
            <CardRecipes
              countryCode={countryCode}
              changeInput={changeInput}
              countryFood={countryFood}
            />
          </Link>
        </div>
      )}
      <Footer />
      <img className={styles.homeLogo} src={logo} alt="Logo" />
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/SearchBar.css";
import countries from "../../assets/countriesList";
import CardInformation from "../../components/CardInformation";
import "./Home.css";

export default function Home() {
  const [countryInput, setCountryInput] = useState("Select your country");
  const [countryEmoji, setCountryEmoji] = useState(null);
  const [dropDownMenu, setShowDropDownMenu] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [countryFlag, setCountryFlag] = useState();
  // const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  const changeInput = (name, emoji, code, image) => {
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
    <div className="mainContainer">
      {countryFlag && <img className="flag" src={countryFlag} alt="" />}
      <h1>HOME</h1>
      <div className="searchBar">
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
          className="displayCountryName"
          placeholder="Select your country"
          onChange={(e) => {
            setCountryInput(e.target.value);
          }}
          onClick={handleDropDownMenu}
          onKeyUp={(e) => handleKeyUp(e)}
        >
          {countryInput}
          {countryEmoji}
          <div className="buttonDropDownMenu" />
        </div>
        <div className="dropDownMenu">
          <ul>
            {countries.map((country) => (
              <li // eslint-disable-line
                className="countryOption"
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
      </div>
      {countryEmoji && (
        <div className="cardContainer">
          <Link to="/results/news">
            <CardInformation
              countryCode={countryCode}
              changeInput={changeInput}
            />
          </Link>
        </div>
      )}
    </div>
  );
}

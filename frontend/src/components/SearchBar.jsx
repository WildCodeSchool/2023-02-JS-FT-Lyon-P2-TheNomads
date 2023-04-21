// import { useState, useEffect } from "react";
// import "./SearchBar.css";
// import countries from "../assets/countriesList";

// export default function SearchBar() {
//   const [countryInput, setCountryInput] = useState("Select your country");
//   const [countryFlag, setCountryFlag] = useState();
//   const [dropDownMenu, setShowDropDownMenu] = useState(false);
//   const [countryCode, setCountryCode] = useState();
//   // const [showDropDownMenu, setShowDropDownMenu] = useState(false);

//   const changeInput = (name, emoji, code) => {
//     setCountryInput(name);
//     setCountryFlag(emoji);
//     setCountryCode(code);
//   };

//   const handleDropDownMenu = () => {
//     setShowDropDownMenu(!dropDownMenu);
//   };

//   // const handleDropDownMenuEnter = (event) => {
//   //   if (event.key === "Enter") {
//   //     setShowDropDownMenu(!dropDownMenu);
//   //   }
//   // };
//   // console.log(countries);
//   // const handleCountry = () => {
//   //   alert("some");
//   // };

//   return (
//     <div className="searchBar">
//       <div
//         className="displayCountryName"
//         placeholder="Select your country"
//         onChange={(e) => {
//           setCountryInput(e.target.value);
//         }}
//         onClick={handleDropDownMenu}
//         // onKeyDown={(e) => handleDropDownMenuEnter(e)}
//       >
//         {countryInput}
//         {countryFlag}
//         <div className="buttonDropDownMenu" />
//       </div>
//       {dropDownMenu && (
//         <div className="dropDownMenu">
//           <ul>
//             {countries.map((country) => (
//               <li
//                 className="countryOption"
//                 onClick={() =>
//                   changeInput(country.name, country.emoji, country.code)
//                 }
//               >
//                 {country.name} {country.emoji} {countryCode}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

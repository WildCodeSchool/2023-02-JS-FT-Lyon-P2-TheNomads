import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Receipts from "./pages/Receipts/Receipts";
import Images from "./pages/Images/Images";
import Music from "./pages/Music/Music";

import NewsContext from "./contexts/NewsContext";

export default function HomeMain() {
  const [countryInformation, setCountryInformation] = useState();

  return (
    <main>
      <NewsContext.Provider
        value={{ countryInformation, setCountryInformation }}// eslint-disable-line
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/news" element={<News />} />
          <Route path="/results/music" element={<Music />} />
          <Route path="/results/images" element={<Images />} />
          <Route path="/results/receipts" element={<Receipts />} />
        </Routes>
      </NewsContext.Provider>
    </main>
  );
}

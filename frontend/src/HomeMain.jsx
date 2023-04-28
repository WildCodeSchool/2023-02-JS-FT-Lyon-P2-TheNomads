import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Receipts from "./pages/Receipts/Receipts";
import Images from "./pages/Images/Images";
import Music from "./pages/Music/Music";

import NewsContext from "./contexts/NewsContext";

export default function HomeMain() {
  const [country, setCountry] = useState(null);

  return (
    <main>
      <NewsContext.Provider  value={{ country, setCountry }} //eslint-disable-line
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/images" element={<Images />} />
          <Route path="/receipts" element={<Receipts />} />
        </Routes>
      </NewsContext.Provider>
    </main>
  );
}

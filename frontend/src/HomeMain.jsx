import { Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Recipes from "./pages/Recipes/Recipes";
import Images from "./pages/Images/Images";
import Music from "./pages/Music/Music";

import NewsContext from "./contexts/NewsContext";

export default function HomeMain() {
  const [country, setCountry] = useState(null);

  const countryWrapper = useMemo(() => ({ country, setCountry }), [country]);

  return (
    <main>
      <NewsContext.Provider value={countryWrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/images" element={<Images />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </NewsContext.Provider>
    </main>
  );
}

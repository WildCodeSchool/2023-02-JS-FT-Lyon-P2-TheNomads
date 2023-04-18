import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import News from "./pages/News/News";
import Receipts from "./pages/Receipts/Receipts";
import Images from "./pages/Images/Images";
import Music from "./pages/Music/Music";

export default function HomeMain() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/news" element={<News />} />
        <Route path="/results/music" element={<Music />} />
        <Route path="/results/images" element={<Images />} />
        <Route path="/results/receipts" element={<Receipts />} />
      </Routes>
    </main>
  );
}

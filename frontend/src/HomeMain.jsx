import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Receipts from "./pages/Receipts/Receipts";
import Images from "./pages/Images/Images";
import Music from "./pages/Music/Music";

export default function HomeMain() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/images" element={<Images />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </main>
  );
}

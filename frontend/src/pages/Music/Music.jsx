import { useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import Header from "../../Header";
import Footer from "../../Footer";
import styles from "./Music.module.css";

export default function Music() {
  const { country } = useContext(NewsContext);
  return (
    <>
      <Header />
      <div className={styles.musicContainer}>
        <iframe
          title="deezer-widget"
          src={`https://widget.deezer.com/widget/auto/playlist/${country.playListNumber}`}
          width="80%"
          height="450"
          frameBorder="0"
          allow="encrypted-media; clipboard-write"
        />
      </div>
      <Footer />
    </>
  );
}

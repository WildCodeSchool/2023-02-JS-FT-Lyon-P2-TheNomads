import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";
import styles from "./CardMusic.module.css";

export default function CardMusic() {
  const { country } = useContext(NewsContext);

  return (
    <div className={styles.musicContainer}>
      <iframe
        title="deezer-widget"
        src={`https://widget.deezer.com/widget/auto/playlist/${country.playListNumber}`}
        width="100%"
        height="250"
        frameBorder="0"
        allow="encrypted-media; clipboard-write"
      />
    </div>
  );
}

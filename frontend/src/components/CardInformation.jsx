import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import React, { useState, useEffect, useContext } from "react";
import styles from "./CardInformation.module.css";
import NewsContext from "../contexts/NewsContext";
import newspaper from "../assets/newspaper.png";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function cardInformation() {
  const [news, setNews] = useState(null);
  const { country } = useContext(NewsContext);

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country.code}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles[0]))
      .catch((err) =>
        toast.error(
          `Your news are temporarily unavailable. Please contact Marcelo for more information. ${err}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      );
  };
  useEffect(() => {
    newsData();
  }, [country]);
  return (
    <div className={styles.cardInformation}>
      <div>
        {news && (
          <div className={styles.displayNew} style={{ padding: "15px" }}>
            <h2>{news.title}</h2>
            <h2>{news.content}</h2>
            <img className={styles.newsPaper} src={newspaper} alt="newspaper" />
          </div>
        )}
      </div>
    </div>
  );
}

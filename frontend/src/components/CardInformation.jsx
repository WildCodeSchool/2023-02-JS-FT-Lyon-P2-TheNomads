import { useState, useEffect } from "react";
import styles from "./CardInformation.module.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function cardInformation({ countryCode, changeInput }) {
  const [news, setNews] = useState(null);

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles[0]));
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))
  };
  // .then((response) => console.log(response));
  useEffect(() => {
    newsData();
  }, [changeInput]);
  return (
    <div className={styles.cardInformation}>
      <div className={styles.newsContainer}>
        {news && (
          <div className={styles.displayNew} style={{ padding: "15px" }}>
            <h2>{news.title}</h2>
            <h2>{news.content}</h2>
            <h3>Author: {news.author}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

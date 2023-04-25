import { useState, useEffect, useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import Header from "../../Header";
import styles from "./News.module.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function News() {
  const [news, setNews] = useState(null);

  const { countryInformation } = useContext(NewsContext);

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryInformation}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles[0]));
  };
  // .then((response) => console.log(response));
  useEffect(() => {
    newsData();
  }, []);
  return (
    <>
      <Header />
      <div> NEWS </div>
      <div className={styles.newsContainer}>
        <div className={styles.news}>
          {news && (
            <div>
              <h2>{news.title}</h2>
              <h2>{news.content}</h2>
              <h3>Author: {news.author}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import React, { useState, useEffect, useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import styles from "./News.module.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function News() {
  const [news, setNews] = useState(null);
  const { country } = useContext(NewsContext);

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country.code}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles))
      .catch((err) =>
        toast.error(`Your news are unavailable. Please contact us ${err}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };
  useEffect(() => {
    newsData();
  }, [country]);
  return (
    <div className={styles.newsContainer}>
      <ToastContainer />
      {country && (
        <div className={styles.newsPage}>
          {news &&
            news.map((item, index) => (
              <div key={item.id} className={styles.news}>
                <h1>{news[index].title}</h1>
                <p>
                  <a href={news[index].url} target="_blank" rel="noreferrer">
                    Click to see more
                  </a>
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

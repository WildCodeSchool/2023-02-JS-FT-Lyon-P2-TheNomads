import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import Header from "../../Header";

import styles from "./News.module.css";
import Footer from "../../Footer";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function News() {
  const [news, setNews] = useState(null);

  const { countryInformation } = useContext(NewsContext);

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryInformation}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles))
      .catch((err) =>
        toast.error(`Error while loading data ${err}`, {
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
  }, []);
  // console.log("this", news);
  return (
    <div>
      <Header />
      <ToastContainer />
      {news && (
        <div className={styles.newsContainer}>
          {news &&
            news.map((item, index) => (
              <div key={item.id} className={styles.news}>
                <h1>{news[index].title}</h1>
                <p>{news[index].content}</p>
                <p>{news[index].author}</p>
                <p>
                  <a href={news[index].url} target="_blank" rel="noreferrer">
                    Click to see more
                  </a>
                </p>
              </div>
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

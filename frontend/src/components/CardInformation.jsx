import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import styles from "./CardInformation.module.css";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function cardInformation({ countryCode, changeInput }) {
  const [news, setNews] = useState(null);

  // const notify = () => toast("Error while loading data");

  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => setNews(response.articles[0]))
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
  // .then((response) => console.log(response));
  useEffect(() => {
    newsData();
  }, [changeInput]);
  return (
    <>
      <ToastContainer />
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
    </>
  );
}

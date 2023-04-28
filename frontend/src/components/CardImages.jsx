import "react-toastify/dist/ReactToastify.css";
import { createClient } from "pexels";
import React, { useState, useEffect, useContext } from "react";
import styles from "./CardImages.module.css";
import NewsContext from "../contexts/NewsContext";

const IMAGES_API_KEY = import.meta.env.VITE_IMAGES_API_KEY;

export default function CardImage() {
  const client = createClient(`${IMAGES_API_KEY}`);

  const { country } = useContext(NewsContext);

  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const query = country.name;

  const handleClick = () => {
    client.photos.search({ query, per_page: 3 }).then((photos) => {
      setImg(photos.photos[0].src.original);
      setImg2(photos.photos[1].src.original);
      setImg3(photos.photos[2].src.original);
    });
  };
  useEffect(() => {
    handleClick();
  }, [country]);
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.imageCard}>
        <figure>
          {img.length > 0 ? <img src={img} alt="Photos" width="400px" /> : ""}
        </figure>
      </div>
      <div className={styles.imageCard}>
        <figure>
          {img.length > 0 ? <img src={img2} alt="Photos" width="400px" /> : ""}
        </figure>
      </div>
      <div className={styles.imageCard}>
        <figure>
          {img.length > 0 ? <img src={img3} alt="Photos" width="400px" /> : ""}
        </figure>
      </div>
    </div>
  );
}

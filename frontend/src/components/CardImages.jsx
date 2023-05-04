import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { createClient } from "pexels";
import React, { useState, useEffect, useContext } from "react";
import styles from "./CardImages.module.css";
import NewsContext from "../contexts/NewsContext";

const IMAGES_API_KEY = import.meta.env.VITE_IMAGES_API_KEY;

export default function CardImage() {
  const client = createClient(`${IMAGES_API_KEY}`);

  const { country } = useContext(NewsContext);

  const [images, setImages] = useState(null);

  const query = country.name;
  const quantityOfImages = 3;
  const handleClick = () => {
    client.photos
      .search({ query, per_page: quantityOfImages })
      .then((photos) => {
        setImages(photos.photos);
      })
      .catch((err) =>
        toast.error(
          `Your images are temporarily unavailable. Please contact Marcelo for more information. ${err}`,
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
    handleClick();
  }, [country]);
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.picturesContainer}>
        {images &&
          images.map((image) => (
            <div className={styles.imageCard}>
              <img src={image.src.original} alt="Photos" width="400px" />
            </div>
          ))}
      </div>
    </div>
  );
}

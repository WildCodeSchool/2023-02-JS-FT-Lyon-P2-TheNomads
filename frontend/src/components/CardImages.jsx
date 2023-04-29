import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
        setImages(photos);
      })
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
    handleClick();
  }, [country]);
  return (
    <>
      <ToastContainer />
      <div className={styles.imagesContainer}>
        <div className={styles.imageCard}>
          <figure>
            {images && (
              <img
                src={images.photos[0].src.original}
                alt="Photos"
                width="400px"
              />
            )}
          </figure>
        </div>
        <div className={styles.imageCard}>
          <figure>
            {images && (
              <img
                src={images.photos[1].src.original}
                alt="Photos"
                width="400px"
              />
            )}
          </figure>
        </div>
        <div className={styles.imageCard}>
          <figure>
            {images && (
              <img
                src={images.photos[2].src.original}
                alt="Photos"
                width="400px"
              />
            )}
          </figure>
        </div>
      </div>
    </>
  );
}

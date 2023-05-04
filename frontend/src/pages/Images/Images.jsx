import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { createClient } from "pexels";
import React, { useState, useEffect, useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import styles from "./Images.module.css";

export default function Images() {
  const IMAGES_API_KEY = import.meta.env.VITE_IMAGES_API_KEY;

  const client = createClient(`${IMAGES_API_KEY}`);

  const { country } = useContext(NewsContext);

  const [images, setImages] = useState(null);

  const query = country.name;
  const quantityOfImages = 15;
  const handleClick = () => {
    client.photos
      .search({ query, per_page: quantityOfImages })
      .then((photos) => {
        setImages(photos.photos);
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
    <div>
      <div className={styles.imagesContainerBox}>
        {images &&
          images.map((image) => (
            <figure className={styles.figure}>
              <img src={image.src.original} alt="Photos" width="400px" />
            </figure>
          ))}
      </div>
    </div>
  );
}

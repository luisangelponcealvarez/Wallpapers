import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
// import "./Unisplash.css";
import { fetchImages } from "../../Api";
import { Footer } from "../Footer";
import { Heder } from "../Heder";

export const UnsplashImages = () => {
  // Estados de los elementos
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("wallpapers");
  const [loading, setLoading] = useState(false);

  // petición a la api

  useEffect(() => {
    const fetchImagesData = async () => {
      setLoading(true);
      const newImages = await fetchImages(query, page);
      setImages(newImages);
      setLoading(false);
    };

    if (query) {
      fetchImagesData();
    }
  }, [query, page]);

  // Función para buscar

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get("search");
    setPage(1);
    setQuery(searchQuery);
  };

  return (
    <>
      <Heder handleSearch={handleSearch} />
      <section id="wallpapers">
        {query && (
          <>
            {loading && (
              <div className="loading-icon d-inline-flex justify-content-center aling-items-center">
                <FontAwesomeIcon icon={faSpinner} spin size="3x" />
              </div>
            )}

            {images.map((image) => (
              <Card data={image} key={image.id} />
            ))}

            <div className="btn-page">
              <button
                onClick={() => setPage((page) => Math.max(page - 1, 1))}
                disabled={page === 1}
                className="btn btn-secondary"
              >
                Anterior
              </button>

              <button
                onClick={() => setPage((page) => page + 1)}
                className="btn btn-secondary"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

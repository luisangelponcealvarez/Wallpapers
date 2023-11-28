import React, { useState, useEffect } from "react";
import Card from "./Card";
import { fetchImages } from "../../Api";
import { Footer } from "../Footer";
import { Heder } from "../Heder";
import { Loading } from "../Loading";

export function UnsplashImages() {
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
      setImages((prevImages) => [...prevImages, ...newImages]);
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
    setImages([]); // Limpiar las imágenes al realizar una nueva búsqueda
    setQuery(searchQuery);
  };

  return (
    <>
      <Heder handleSearch={handleSearch} />
      <section id="wallpapers">
        {query && (
          <>
            {loading && images.length > 0 && <Loading />}

            {images.length > 0 &&
              images.map((image) => <Card data={image} key={image.id} />)}

            <div className="btn-page">
              <button
                onClick={() => setPage((page) => page + 1)}
                className="btn btn-secondary"
              >
                Cargar Más
              </button>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

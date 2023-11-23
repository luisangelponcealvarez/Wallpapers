import axios from "axios";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

if (!accessKey) {
  console.error(
    "La clave API de Unsplash no está definida en las variables de entorno"
  );
}

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: query,
        client_id: accessKey,
        page: page,
        per_page: 9,
      },
    });
    return response.data.results;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Error 401: No autorizado. Verifica tu clave API.");
    } else {
      console.error("Ocurrió un error al obtener imágenes:", error.message);
    }
    return [];
  }
};

export { fetchImages };

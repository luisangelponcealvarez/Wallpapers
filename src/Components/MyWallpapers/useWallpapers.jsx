import { useEffect, useState } from "react";

export function useWallpapers() {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDatabase() {
    try {
      setLoading(true);

      // Importa dinámicamente todas las imágenes en la carpeta '../../../Wallpapers/' con extensión '.jpg'
      const imageContext = import.meta.globEager("../../../Wallpapers/*.jpg");

      const imagePaths = Object.keys(imageContext);

      const name = imagePaths.map((path) => {
        const fileName = path.split("/").pop();
        const nameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
        return { nameWithoutExtension, path };
      });

      console.log("Imported Images:", name);

      setWallpapers(name);
    } catch (error) {
      console.log("Error importing images:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDatabase();
  }, []);
  // El array de dependencias está vacío, por lo que useEffect se ejecutará solo una vez después del montaje.

  return { wallpapers, error, loading };
}

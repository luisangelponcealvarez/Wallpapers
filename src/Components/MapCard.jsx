import "../Style/wallpapers.css";
import "../Style/Button.css";

export function MapCard({ wallpaper }) {
  const { NombreWallpaper, Resolution } = wallpaper;

  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image"
          src={
            "https://github.com/luisangelponcealvarez/Wallpapers/tree/main/public/Wallpapers/" +
            NombreWallpaper +
            ".jpg"
          }
          alt={NombreWallpaper}
        />
        <h5>{NombreWallpaper}</h5>
      </div>

      <div className="face back">
        <h5>Nombre: {NombreWallpaper}</h5>
        <p>Resolución: {Resolution}</p>
        <div className="link">
          <a
            href={
              "https://github.com/luisangelponcealvarez/Wallpapers/tree/main/public/Wallpapers/" +
              NombreWallpaper +
              ".jpg"
            }
            target="_blank"
          >
            <button>
              <i className="fa-brands fa-github GitHub" />
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

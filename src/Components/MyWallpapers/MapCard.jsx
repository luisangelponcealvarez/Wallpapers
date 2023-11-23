import "../../Style/main.css";

export function MapCard({ wallpaper }) {
  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image"
          src={wallpaper.path}
          alt={wallpaper.path}
        />
        <h5>{wallpaper.path}</h5>
      </div>

      <div className="face back">
        {/* <h5>Nombre: {NombreWallpaper}</h5> */}
        {/* <p>Resolución: {Resolution}</p> */}
        <div className="link">
          <a
            href={
              "https://github.com/luisangelponcealvarez/Wallpapers/tree/main/Wallpapers/"
            }
            target="_blank"
            className="btn btn-outline-secondary
              m-2"
          >
            <i className="fa-brands fa-github GitHub" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

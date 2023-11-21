import { Header } from "../Header";
import "./StyleError.css";

export function VideosNoDisponible() {
  return (
    <>
      <div className="Error404">
        <div className="img_404">
          <img
            className="m-2"
            src="https://cdn-icons-png.flaticon.com/512/2088/2088093.png"
            alt="404"
          />
        </div>
        <p className="notfound-text">Video No Disponible</p>
        <Header />
      </div>
    </>
  );
}

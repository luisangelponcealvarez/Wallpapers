import { Link } from "react-router-dom";
import { Formulario } from "../UnisplashApi/Formulario";
import "./Heder.css";

export function Heder({ handleSearch }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Site Wallpapers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/MyWallpapers">
                  My Wallpapers
                </Link>
              </li>
            </ul>

            <Formulario handleSearch={handleSearch} />
          </div>
        </div>
      </nav>
    </>
  );
}

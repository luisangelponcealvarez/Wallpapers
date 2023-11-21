import { Header } from "../Header";
import "./StyleError.css";

export function SiteEnMantenimiento() {
  return (
    <section className="Error404">
      <div className="img_404">
        <img
          className="image-404 m-3"
          src="https://www.paginas-web.site/wp-content/uploads/2021/10/las-claves-de-un-buen-mantenimiento-web-moderno-y-eficiente.jpg"
          alt="Site En Mantenimiento"
        />
      </div>
      <p className="notfound-text">
        Lo sentimos, el sitio web está en mantenimiento.
        <br />
        Por favor vuelva más tarde.
      </p>
      <Header />
    </section>
  );
}

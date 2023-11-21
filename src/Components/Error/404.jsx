import { Link } from "react-router-dom";
import "./StyleError.css";

export function Error404() {
  return (
    <section>
      <div className="Error404">
        <div className="img_404">
          <img
            className="image-404 m-3"
            src="https://raw.githubusercontent.com/luisangelponcealvarez/Recursos/main/Icons/404.jpg?token=GHSAT0AAAAAACEJRZG3TST5K4VMHOS36LOYZKNN4MQ"
            alt="404"
          />
        </div>

        <p className="notfound-text fs-2">
          Esta página no existe o esta en mantenimiento
        </p>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
}

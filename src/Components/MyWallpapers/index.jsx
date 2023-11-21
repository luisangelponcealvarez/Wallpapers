import { ListWallpapers } from "../../Data/ListWallpapers";
import { Footer } from "../Footer";
import { Heder } from "../Heder";
import { MapCard } from "./MapCard";

export function MyWallpapers() {
  return (
    <>
      <Heder />

      <section id="wallpapers">
        <div className="text">
          <h3>Wallpapers Luis Angel</h3>
          <a
            href="https://github.com/luisangelponcealvarez/Wallpapers/tree/main/Wallpapers"
            target="_blank"
            className="btn btn-secondary btn-repo"
          >
            <i className="fa-brands fa-github icon" />
            Repo
          </a>
        </div>

        {ListWallpapers.map((wallpaper, index) => (
          <MapCard wallpaper={wallpaper} key={index} />
        ))}
      </section>

      <Footer />
    </>
  );
}

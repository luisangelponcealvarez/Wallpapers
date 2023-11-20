import { ListWallpapers } from "../public/Data/ListWallpapers";
import { MapCard } from "./Components/MapCard";
import "./Style/wallpapers.css";
import "./Style/Button.css";

function App() {
  return (
    <>
      <section id="wallpapers">
        <div className="container-wallpapers">
          <h1>Wallpapers</h1>

          <a
            href="https://github.com/luisangelponcealvarez/Wallpapers"
            target="_blank"
          >
            <button>
              <i className="fa-brands fa-github GitHub" />
              Repo
            </button>
          </a>
        </div>

        {ListWallpapers.map((wallpaper, index) => (
          <MapCard wallpaper={wallpaper} key={index} />
        ))}
      </section>
    </>
  );
}

export default App;

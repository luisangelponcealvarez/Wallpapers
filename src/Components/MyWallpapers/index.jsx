import { Footer } from "../Footer";
import { Heder } from "../Heder";
import { MapCard } from "./MapCard";
import { useWallpapers } from "./UseWallpapers";

export function MyWallpapers() {
  const { wallpapers, error, loading } = useWallpapers();

  if (loading) return <p>Loading database...</p>;
  if (error) return <code>{JSON.stringify(error)}</code>;

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

        {wallpapers.map((wallpaper, index) => (
          <MapCard wallpaper={wallpaper} key={index} />
        ))}
      </section>

      <Footer />
    </>
  );
}

import { Footer } from "../Footer";
import { Loading } from "../Loading";
import { MapCard } from "./MapCard";
import { useWallpapers } from "./useWallpapers";

export function MyWallpapers() {
  const { wallpapers, error, loading } = useWallpapers();

  if (loading) return <Loading />;
  if (error) return <code>{JSON.stringify(error)}</code>;

  return (
    <>
      <section id="wallpapers">
        <div className="text">
          <h3>Wallpapers Luis Angel Ponce Alvarez</h3>
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

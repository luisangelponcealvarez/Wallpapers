import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiSpotify,
  SiYoutube,
} from "react-icons/si";
import "./RedesSociales.css";

function RedesSociales() {
  return (
    <div id="redes">
      <a
        href="https://www.linkedin.com/in/luis-angel-ponce-alvarez-848826242/"
        target="_blank"
      >
        <SiLinkedin className="Linkedin" />
      </a>

      <a href="https://www.youtube.com/@LuisAngelPonceAlvarez" target="_blank">
        <SiYoutube className="Youtube" />
      </a>

      <a href="https://github.com/luisangelponcealvarez/" target="_blank">
        <SiGithub className=" Github" />
      </a>

      <a
        href="https://www.instagram.com/poncealvarezluisangel/"
        target="_blank"
      >
        <SiInstagram className="Instagram" />
      </a>

      <a
        href="https://www.facebook.com/luisangel.poncealvarez.37"
        target="_blank"
      >
        <SiFacebook className="Facebook" />
      </a>

      <a href="https://twitter.com/Luisang01161226" target="_blank">
        <SiTwitter className="Twitter" />
      </a>
      <a
        href="https://open.spotify.com/user/nhf5pz5g4wdgjk0bvw2fzhakd?si=1ff6fa2155254f25"
        target="_blank"
      >
        <SiSpotify className="Spotify" />
      </a>
    </div>
  );
}

export default RedesSociales;

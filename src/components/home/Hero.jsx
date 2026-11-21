import CinematicHero from "../common/CinematicHero";
import Button from "../common/Button";
import { IMAGES } from "../../data/images";

export default function Hero() {
  return (
    <CinematicHero
      image={IMAGES.heroVxr}
      label="Velocity VXR-01"
      lines={["BUILT TO", "DEFY LIMITS."]}
      lead="Precision engineered for those who demand more."
      showCue
    >
      <Button to="/models/vxr-01">Explore the VXR-01</Button>
      <Button to="/technology" variant="ghost">
        Discover our engineering
      </Button>
    </CinematicHero>
  );
}

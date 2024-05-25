import "./App.css";
import ProximaCanvas from "./ProximaCanvas.jsx";

function Venus() {
  return (
    <div className="Sky">
      <div className="Venus text-rose-900 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>
          Proxima <br /> Centauri B
        </span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a className="text-rose-300" style={{ fontFamily: "Playfair Display" }}>
          Proxima Centauri b (or Proxima b),[5] sometimes referred to as Alpha
          Centauri Cb, is an exoplanet orbiting within the habitable zone of the
          red dwarf star Proxima Centauri, which is the closest star to the Sun
          and part of the larger triple star system Alpha Centauri. It is about
          4.2 light-years (1.3 parsecs) from Earth in the constellation
          Centaurus, making it and Proxima d, along with the currently disputed
          Proxima c, the closest known exoplanets to the Solar System.Proxima
          Centauri b orbits its parent star at a distance of roughly 0.04856 AU
          (7.264 million km; 4.514 million mi) with an orbital period of
          approximately 11.2 Earth days. Its other properties are only poorly
          understood, but it is believed to be a potentially Earth-like planet
          with a minimum mass of at least 1.07 M🜨 and only a slightly larger
          radius than that of Earth. The planet orbits within the habitable zone
          of its parent star; but it is not known whether it has an atmosphere.
          Proxima Centauri is a flare star with intense emission of
          electromagnetic radiation that could strip an atmosphere off the
          planet. The planets proximity to Earth offers an opportunity for
          robotic space exploration.
        </a>
      </div>
      <div className="VenusCanvas">
        <ProximaCanvas />{" "}
      </div>
    </div>
  );
}

export default Venus;

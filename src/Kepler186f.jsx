import "./App.css";
import KeplerCanvas from "./KeplerCanvas.jsx";

function Venus() {
  return (
    <div className="Sky">
      <div className="Venus text-rose-900 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Kepler 186 f</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a className="text-rose-300" style={{ fontFamily: "Playfair Display" }}>
          Kepler-186f, the first Earth-sized extrasolar planet to be found
          within its star’s habitable zone—the orbital region where an
          Earth-like planet could possess liquid water on its surface and thus
          possibly support life. Kepler-186f was discovered in 2014 in data
          taken by the Kepler satellite before its mission ended the previous
          year. The planet has a radius 1.11 times that of Earth. The mass of
          Kepler-186f is unknown; however, if it has an Earth-like composition,
          its mass would be 1.44 times that of Earth. It was the fifth planet
          discovered around its star, a dim red dwarf 500 light-years from Earth
          with a mass 0.48 times that of the Sun. Kepler-186f orbits its star
          every 129.9 days at a distance of 53.2 million km (33.1 million
          miles). It receives only 32 percent of the amount of light that Earth
          receives from the Sun, but water could exist in a liquid state if its
          atmosphere has sufficient amounts of carbon dioxide. The other four
          planets in the system are Earth-sized; however, they orbit much closer
          to the star and thus are not within the habitable zone. Kepler-186f is
          far enough away from its star that it may not be tidally locked (i.e.,
          its day may not be as long as its year, with one side always facing
          its star).
        </a>
      </div>
      <div className="VenusCanvas">
        <KeplerCanvas />{" "}
      </div>
    </div>
  );
}

export default Venus;

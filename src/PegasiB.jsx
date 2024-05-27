import "./App.css";
import PegasiCanvas from "./PegasiCanvas.jsx";

function Pegasi() {
  return (
    <div className="Sky">
      <div className="Venus mr-16 text-yellow-300 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>51 Pagausus B</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm transition-transform hover:scale-200">
        <a
          className="text-yellow-200"
          style={{ fontFamily: "Playfair Display" }}
        >
          51 Pegasi b, the first extrasolar planet confirmed to orbit a sunlike
          star. The planet orbits a fifth-magnitude star, 51 Pegasi, located 48
          light-years away from Earth in the constellation Pegasus. 51 Pegasi
          has physical properties (luminosity and temperature, for example) very
          similar to those of the Sun. The extrasolar planet is not visible from
          Earth, but its presence was deduced in 1995 from the wobble that its
          gravity induces in the parent star’s motion in a 4.23-day cycle. Swiss
          astronomers Michel Mayor and Didier Queloz were the first to find a
          planet through such induced motions, and the discovery of 51 Pegasi b
          led to thousands more extrasolar planets being found. (Mayor and
          Queloz won the 2019 Nobel Prize for Physics for their discovery.) The
          planet orbits surprisingly close (7.8 million km [4.8 million miles])
          to the star—much closer than Mercury orbits the Sun (at a distance of
          57.9 million km [35.9 million miles]). It has a mass 46 percent that
          of Jupiter but has a radius 1.9 times that of Jupiter because it is
          inflated by its star’s heat. 51 Pegasi b was the first known “hot
          Jupiter,” a gas giant planet orbiting very close to its star. Such
          planets upended then-current ideas of planetary system formation,
          which were based on the solar system, in which gas giants orbit far
          from the Sun. The hot Jupiters likely formed far from their stars and
          migrated inward.
        </a>
      </div>
      <div className="VenusCanvas">
        <PegasiCanvas />{" "}
      </div>
    </div>
  );
}

export default Pegasi;

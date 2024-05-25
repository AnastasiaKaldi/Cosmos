import "./App.css";
import SaturnCanvas from "./SaturnCanvas";

function Saturn() {
  return (
    <div className="Sky">
      <div className="Venus text-orange-800 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Saturn</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a
          className="text-orange-300"
          style={{ fontFamily: "Playfair Display" }}
        >
          Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of
          hydrogen and helium. Saturn is not the only planet to have rings, but
          none are as spectacular or as complex as Saturn’s. Saturn also has
          dozens of moons. From the jets of water that spray from Saturn’s moon
          Enceladus to the methane lakes on smoggy Titan, the Saturn system is a
          rich source of scientific discovery and still holds many mysteries.The
          farthest planet from Earth discovered by the unaided human eye, Saturn
          has been known since ancient times. The planet is named for the Roman
          god of agriculture and wealth, who was also the father of Jupiter.{" "}
          <br />
          <br />
          Saturn’s environment is not conducive to life as we know it. The
          temperatures, pressures, and materials that characterize this planet
          are most likely too extreme and volatile for organisms to adapt to.
          While planet Saturn is an unlikely place for living things to take
          hold, the same is not true of some of its many moons. Satellites like
          Enceladus and Titan, home to internal oceans, could possibly support
          life. Saturn is home to a vast array of intriguing and unique worlds.
          From the haze-shrouded surface of Titan to crater-riddled Phoebe, each
          of Saturn’s moons tells another piece of the story surrounding the
          Saturn system. As of June 8, 2023, Saturn has 146 moons in its orbit,
          with others continually awaiting confirmation of their discovery and
          official naming by the International Astronomical Union (IAU).
        </a>
      </div>
      <div className="SaturnCanvas">
        <SaturnCanvas />{" "}
      </div>
    </div>
  );
}

export default Saturn;

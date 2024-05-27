import "./App.css";
import UranusCanvas from "./UranusCanvas.jsx";

function Mercury() {
  return (
    <div className="Sky">
      <div className="Venus text-sky-200 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Uranus</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a className="text-sky-100" style={{ fontFamily: "Playfair Display" }}>
          Uranus is a very cold and windy world. The ice giant is surrounded by
          13 faint rings and 28 small moons. Uranus rotates at a nearly
          90-degree angle from the plane of its orbit. This unique tilt makes
          Uranus appear to spin sideways, orbiting the Sun like a rolling ball.
          Uranus was the first planet found with the aid of a telescope. It was
          discovered in 1781 by astronomer William Herschel, although he
          originally thought it was either a comet or a star. It was two years
          later that the object was universally accepted as a new planet, in
          part because of observations by astronomer Johann Elert Bode.Uranus
          environment is not conducive to life as we know it. The temperatures,
          pressures, and materials that characterize this planet are most likely
          too extreme and volatile for organisms to adapt to. Uranus has 28
          known moons. While most of the satellites orbiting other planets take
          their names from Greek or Roman mythology, Uranus moons are unique in
          being named for characters from the works of William Shakespeare and
          Alexander Pope. All of Uranus inner moons appear to be roughly half
          water ice and half rock. The composition of the outer moons remains
          unknown, but they are likely captured asteroids.Uranus is one of two
          ice giants in the outer solar system (the other is Neptune). Most (80%
          or more) of the planets mass is made up of a hot dense fluid of icy
          materials – water, methane, and ammonia – above a small rocky core.
          Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees
          Celsius).
        </a>
      </div>
      <div className="MercuryCanvas">
        <UranusCanvas />
      </div>
    </div>
  );
}

export default Mercury;

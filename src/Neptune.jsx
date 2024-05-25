import "./App.css";
import NeptuneCanvas from "./NeptuneCanvas.jsx";
function Neptune() {
  return (
    <div className="Sky">
      <div className="Venus text-cyan-800 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Neptune</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a className="text-cyan-100" style={{ fontFamily: "Playfair Display" }}>
          Dark, cold, and whipped by supersonic winds, ice giant Neptune is more
          than 30 times as far from the Sun as Earth. Neptune is the only planet
          in our solar system not visible to the naked eye. In 2011 Neptune
          completed its first 165-year orbit since its discovery in 1846.
          Neptune is so far from the Sun that high noon on the big blue planet
          would seem like dim twilight to us. The warm light we see here on our
          home planet is roughly 900 times as bright as sunlight on Neptune.The
          ice giant Neptune was the first planet located through mathematical
          calculations. Using predictions made by Urbain Le Verrier, Johann
          Galle discovered the planet in 1846. The planet is named after the
          Roman god of the sea, as suggested by Le Verrier. <br />
          <br />
          Neptune’s environment is not conducive to life as we know it. The
          temperatures, pressures, and materials that characterize this planet
          are most likely too extreme, and volatile for organisms to adapt to.
          Neptune has 16 known moons.
          <br />
          <br />
          Neptune’s largest moon Triton was discovered on Oct. 10, 1846, by
          William Lassell, just 17 days after Johann Gottfried Galle discovered
          the planet. Since Neptune was named for the Roman god of the sea, its
          moons are named for various lesser sea gods and nymphs in Greek
          mythology. Triton is the only large moon in the solar system that
          circles its planet in a direction opposite to the planet’s rotation (a
          retrograde orbit), which suggests that it may once have been an
          independent object that Neptune captured. Triton is extremely cold,
          with surface temperatures around minus 391 degrees Fahrenheit (minus
          235 degrees Celsius). And yet, despite this deep freeze at Triton,
          Voyager 2 discovered geysers spewing icy material upward more than 5
          miles (8 kilometers). Triton’s thin atmosphere, also discovered by
          Voyager, has been detected from Earth several times since, and is
          growing warmer, but scientists do not yet know why.
        </a>
      </div>
      <div className="NeptuneCanvas">
        <NeptuneCanvas />
      </div>
    </div>
  );
}

export default Neptune;

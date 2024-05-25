import "./App.css";
import EarthCanvas from "./EarthCanvas.jsx";

function Earth() {
  return (
    <div className="Sky">
      <div className="Venus text-emerald-700 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Earth</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm transition-transform hover:scale-200">
        <a
          className="text-emerald-200"
          style={{ fontFamily: "Playfair Display" }}
        >
          While Earth is only the fifth largest planet in the solar system, it
          is the only world in our solar system with liquid water on the
          surface. Just slightly larger than nearby Venus, Earth is the biggest
          of the four planets closest to the Sun, all of which are made of rock
          and metal. Earth is the only planet in the solar system whose English
          name does not come from Greek or Roman mythology. The name was taken
          from Old English and Germanic. It simply means the ground. There are,
          of course, many names for our planet in the thousands of languages
          spoken by the people of the third planet from the Sun.Earth has a very
          hospitable temperature and mix of chemicals that have made life
          abundant here. Most notably, Earth is unique in that most of our
          planet is covered in liquid water, since the temperature allows liquid
          water to exist for extended periods of time. <br /> Earth’s vast
          oceans provided a convenient place for life to begin about 3.8 billion
          years ago. Some of the features of our planet that make it great for
          sustaining life are changing due to the ongoing effects of climate
          change.Earth is the only planet that has a single moon. Our Moon is
          the brightest and most familiar object in the night sky. In many ways,
          the Moon is responsible for making Earth such a great home. It
          stabilizes our planet’s wobble, which has made the climate less
          variable over thousands of years. Earth sometimes temporarily hosts
          orbiting asteroids or large rocks. They are typically trapped by
          Earth’s gravity for a few months or years before returning to an orbit
          around the Sun. Some asteroids will be in a long “dance” with Earth as
          both orbit the Sun. Some moons are bits of rock that were captured by
          a planet’s gravity, but our Moon is likely the result of a collision
          billions of years ago. When Earth was a young planet, a large chunk of
          rock smashed into it, displacing a portion of Earth’s interior.
        </a>
      </div>
      <div className="EarthCanvas">
        <EarthCanvas />
      </div>
    </div>
  );
}

export default Earth;

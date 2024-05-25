import "./App.css";
import MarsCanvas from "./MarsCanvas.jsx";

function Mars() {
  return (
    <div className="Sky">
      <div className="Venus text-red-900 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Mars</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm transition-transform hover:scale-200">
        <a className="text-red-300" style={{ fontFamily: "Playfair Display" }}>
          Mars is no place for the faint-hearted. It’s dry, rocky, and bitter
          cold. The fourth planet from the Sun, Mars, is one of Earth’s two
          closest planetary neighbors (Venus is the other). Mars is one of the
          easiest planets to spot in the night sky – it looks like a bright red
          point of light. Despite being inhospitable to humans, robotic
          explorers – like NASA’s Perseverance rover are serving as pathfinders
          to eventually get humans to the surface of the Red Planet. <br />
          <br />
          Mars is one of the most explored bodies in our solar system, and it’s
          the only planet where we’ve sent rovers to roam the alien landscape.
          NASA missions have found lots of evidence that Mars was much wetter
          and warmer, with a thicker atmosphere, billions of years ago. Mars was
          named by the Romans for their god of war because its reddish color was
          reminiscent of blood. The Egyptians called it Her Desher, meaning the
          red one. Even today, it is frequently called the Red Planet because
          iron minerals in the Martian dirt oxidize, or rust, causing the
          surface to look red.Scientists don’t expect to find living things
          currently thriving on Mars. Instead, they’re looking for signs of life
          that existed long ago, when Mars was warmer and covered with water.
          <br />
          <br />
          Mars has two small moons, Phobos and Deimos, that may be captured
          asteroids. They’re potato-shaped because they have too little mass for
          gravity to make them spherical. The moons get their names from the
          horses that pulled the chariot of the Greek god of war, Ares.Phobos,
          the innermost and larger moon, is heavily cratered, with deep grooves
          on its surface. It is slowly moving towards Mars and will crash into
          the planet or break apart in about 50 million years. Deimos is about
          half as big as Phobos and orbits two and a half times farther away
          from Mars. Oddly-shaped Deimos is covered in loose dirt that often
          fills the craters on its surface, making it appear smoother than
          pockmarked Phobos.
        </a>
      </div>
      <div className="MarsCanvas">
        <MarsCanvas />
      </div>
    </div>
  );
}

export default Mars;

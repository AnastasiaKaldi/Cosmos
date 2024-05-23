import "./App.css";

function Pegasi() {
  return (
    <div className="Sky">
      <div className="Venus text-fuchsia-200 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>51 Pagausus b</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm transition-transform hover:scale-200">
        <a
          className="text-fuchsia-200"
          style={{ fontFamily: "Playfair Display" }}
        >
          Venus is the second planet from the Sun, and the sixth largest planet.
          It’s the hottest planet in our solar system. Venus is a cloud-swaddled
          planet named for a love goddess, and often called Earth’s twin. But
          pull up a bit closer, and Venus turns hellish. <br />
          <br />
          Our nearest planetary neighbor, the second planet from the Sun, has a
          surface hot enough to melt lead. The atmosphere is so thick that, from
          the surface, the Sun is just a smear of light. In some ways it is more
          an opposite of Earth than a twin: Venus spins backward, has a day
          longer than its year, and lacks any semblance of seasons. It might
          once have been a habitable ocean world, like Earth, but that was at
          least a billion years ago. <br />
          <br />A runaway greenhouse effect turned all surface water into vapor,
          which then leaked slowly into space. The present-day surface of
          volcanic rock is blasted by high temperatures and pressures. Asked if
          the surface of Venus is likely to be life-bearing today, we can give a
          quick answer: a hard “no.” Further, Venus may hold lessons about what
          it takes for life to get its start ­– on Earth, in our solar system,
          or across the galaxy. The ingredients are all there, or at least, they
          used to be. <br />
          <br />
          By studying why our neighbor world went in such a different direction
          with regard to habitability, we could find out what could make other
          worlds right. And while it might sound absurd, we can’t rule out life
          on Venus entirely. Temperature, air pressure, and chemistry are much
          more congenial up high, in those thick, yellow clouds.
        </a>
      </div>
    </div>
  );
}

export default Pegasi;

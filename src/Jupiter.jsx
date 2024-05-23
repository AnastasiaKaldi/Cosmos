import "./App.css";

function Jupiter() {
  return (
    <div className="Sky">
      <div className="Venus text-yellow-600 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Jupiter</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm transition-transform hover:scale-200">
        <a
          className="text-yellow-100"
          style={{ fontFamily: "Playfair Display" }}
        >
          Jupiter’s signature stripes and swirls are actually cold, windy clouds
          of ammonia and water, floating in an atmosphere of hydrogen and
          helium. The dark orange stripes are called belts, while the lighter
          bands are called zones, and they flow east and west in opposite
          directions. Jupiter’s iconic Great Red Spot is a giant storm bigger
          than Earth that has raged for hundreds of years. The king of planets
          was named for Jupiter, king of the gods in Roman mythology. Most of
          its moons are also named for mythological characters, figures
          associated with Jupiter or his Greek counterpart, Zeus.
          <br />
          <br />
          Jupiter’s environment is probably not conducive to life as we know it.
          The temperatures, pressures, and materials that characterize this
          planet are most likely too extreme and volatile for organisms to adapt
          to. While planet Jupiter is an unlikely place for living things to
          take hold, the same is not true of some of its many moons. Europa is
          one of the likeliest places to find life elsewhere in our solar
          system. There is evidence of a vast ocean just beneath its icy crust,
          where life could possibly be supported.With four large moons and many
          smaller moons, Jupiter forms a kind of miniature solar system. <br />
          Jupiter has 95 moons that are officially recognized by the
          International Astronomical Union. The four largest moons – Io, Europa,
          Ganymede, and Callisto – were first observed by the astronomer Galileo
          Galilei in 1610 using an early version of the telescope. These four
          moons are known today as the Galilean satellites, and they’re some of
          the most fascinating destinations in our solar system. ’s Europa
          Clipper mission slated to launch in 2024.
        </a>
      </div>
    </div>
  );
}

export default Jupiter;

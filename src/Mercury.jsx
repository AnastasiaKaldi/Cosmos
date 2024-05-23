import "./App.css";

function Mercury() {
  return (
    <div className="Sky">
      <div className="Venus text-stone-500 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Mercury</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a
          className="text-stone-300"
          style={{ fontFamily: "Playfair Display" }}
        >
          Mercury’s surface temperatures are both extremely hot and cold.
          Because the planet is so close to the Sun, day temperatures can reach
          highs of 800°F (430°C). Without an atmosphere to retain that heat at
          night, temperatures can dip as low as -290°F (-180°C). Despite its
          proximity to the Sun, Mercury is not the hottest planet in our solar
          system – that title belongs to nearby Venus, thanks to its dense
          atmosphere. But Mercury is the fastest planet, zipping around the Sun
          every 88 Earth days.Mercury is appropriately named for the swiftest of
          the ancient Roman gods.Mercury’s environment is not conducive to life
          as we know it. The temperatures and solar radiation that characterize
          this planet are most likely too extreme for organisms to adapt to.
          Mercury doesn’t have moons.Instead of an atmosphere, Mercury possesses
          a thin exosphere made up of atoms blasted off the surface by the solar
          wind and striking meteoroids. Mercury’s exosphere is composed mostly
          of oxygen, sodium, hydrogen, helium, and potassium.
        </a>
      </div>
    </div>
  );
}

export default Mercury;

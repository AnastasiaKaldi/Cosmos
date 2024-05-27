import "./App.css";
import ArcturusCanvas from "./ArcturusCanvas.jsx";

function Arcturus() {
  return (
    <div className="Sky">
      <div className="Venus text-red-500 text-7xl">
        <span style={{ fontFamily: "Homemade Apple" }}>Artcurus</span>
      </div>
      <div className="VenusContainer absolute top-72 right-40 rounded-3xl border-black border text-black text-sm">
        <a className="text-red-300" style={{ fontFamily: "Playfair Display" }}>
          Arcturus is a red giant star located only 36.7 light-years away. It’s
          the 4th-brightest star in the sky and the brightest one in the
          northern half of the sky. Look for it on spring evenings in the
          Northern Hemisphere by arcing to Arcturus from the Big Dipper‘s
          handle. Arcturus is the alpha star of a cone-shaped constellation
          called Boötes the Herdsman. It’s far enough north on the sky’s dome
          that – for Northern Hemisphere observers – it’s visible during some
          part of the night throughout most of the year. There’s an easy
          mnemonic for identifying this brilliant orange star. Just remember the
          phrase follow the arc to Arcturus and then speed on to Spica.First,
          locate the Big Dipper in the northern sky. Notice that the handle of
          the Big Dipper is a curve or arc. Extend this curve past the end of
          the Big Dipper’s handle, and you’ll reach Arcturus.
        </a>
      </div>
      <div className="VenusCanvas">
        <ArcturusCanvas />
      </div>
    </div>
  );
}

export default Arcturus;

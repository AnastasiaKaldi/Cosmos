// Global cosmic background — a deep gradient wash with three static layers
// of CSS-rendered stars. Mounted once at the app root so every page shares
// the same backdrop. Zero JS, zero animation cost.
function Starfield() {
  return (
    <>
      <div className="cosmos-bg" aria-hidden />
      <div className="starfield" aria-hidden />
    </>
  );
}

export default Starfield;

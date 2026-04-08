import { Outlet, useLocation, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Starfield from "./components/Starfield.jsx";

function App() {
  const { pathname } = useLocation();
  // Celestial detail pages have their own dashboard sidebar, so we hide
  // the global navbar there to avoid duplicate navigation chrome.
  const isCelestialPage = matchPath("/explore/:slug", pathname);

  return (
    <>
      <Starfield />
      {!isCelestialPage && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;

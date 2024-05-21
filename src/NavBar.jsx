import PropTypes from "prop-types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  return (
    <div className="NavBar fixed top-0 left-0 w-full bg-gray-800 z-50">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          className="self-center text-5xl font-semibold whitespace-nowrap text-white -mb-28"
          style={{ fontFamily: "Homemade Apple" }}
        >
          Cosmos
        </span>
      </a>
      <div className="PlanetComponent text-m relative container mx-auto py-4 mr-80 space-x-8">
        <FlyoutLink href="/" FlyoutContent={<PlanetsContent />}>
          <span style={{ fontFamily: "Playfair Display" }}> Planets</span>
        </FlyoutLink>
      </div>
      <div className="StarsComponent text-m relative container mx-auto py-4 ml-80 flex space-x-8">
        <FlyoutLink href="/" FlyoutContent={<StarsContent />}>
          <span style={{ fontFamily: "Playfair Display" }}>Stars</span>
        </FlyoutLink>
      </div>
      <div className="GalaxyComponent text-m relative container mx-auto py-4 ml-96 flex space-x-8">
        <FlyoutLink href="/" FlyoutContent={<GalaxiesContent />}>
          <span style={{ fontFamily: "Playfair Display" }}>Galaxies</span>
        </FlyoutLink>
      </div>
    </div>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative inline-block"
    >
      <a
        href={href}
        className="relative h-fit w-fit text-white hover:text-yellow-500"
        style={{ fontFamily: "Times New Roman" }}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 mt-10 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-xl shadow-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PlanetsContent = () => {
  return (
    <div className="w-64 bg-indigo-200 rounded-xl p-6">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">
          <span style={{ fontFamily: "Playfair Display" }}>
            Inside the Solar System
          </span>
        </h3>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Venus</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Mars</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Jupiter</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Earth</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Mercury</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Neptune</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Saturn</span>
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">
          <span style={{ fontFamily: "Playfair Display" }}>
            Outside the Solar System
          </span>
        </h3>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Kepler-186f</span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>
            Proxima Centauri b
          </span>
        </a>
        <a href="#" className="block text-m hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>51 Pegasi b</span>
        </a>
      </div>
    </div>
  );
};

const StarsContent = () => {
  return (
    <div className="w-64 bg-indigo-200 rounded-xl p-6">
      <div className="mb-3 space-y-3">
        <a href="#" className="block text-lg hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>The Sun</span>
        </a>
        <a href="#" className="block text-lg hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Vega</span>
        </a>
        <a href="#" className="block text-lg hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Arcturus</span>
        </a>
      </div>
    </div>
  );
};

const GalaxiesContent = () => {
  return (
    <div className="w-64 bg-indigo-200 rounded-xl p-6">
      <div className="mb-3 space-y-3">
        <a href="#" className="block text-lg hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Milky Way</span>
        </a>
        <a href="#" className="block text-lg hover:underline">
          <span style={{ fontFamily: "Playfair Display" }}>Andromeda</span>
        </a>
      </div>
    </div>
  );
};

// Define prop types for the FlyoutLink component
FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.node,
};

// Provide default props for FlyoutLink
FlyoutLink.defaultProps = {
  FlyoutContent: null,
};

export default NavBar;

import { useState } from "react";
import "./App.css";
import icon from "../public/icon.png"; // make sure the path to the icon is correct

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 p-6">
      <img
        src={icon}
        alt="menu"
        onClick={toggleMenu}
        className="cursor-pointer w-15 h-15"
      />
      <ul
        className={`absolute right-0 mt-2 bg-white space-y-4 text-black shadow-lg rounded-lg p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="/" className="block">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="block">
            The Solar System
          </a>
        </li>
        <li>
          <a href="/contact" className="block">
            Other Concepts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

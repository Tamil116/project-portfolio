import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { ThemeContext } from "./ThemeContext";; // ✅ Make sure the path is correct

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Access theme toggle

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-white dark:bg-black text-black dark:text-white fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">Tamil</h1>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          />
        ))}
        {/* ✅ Theme toggle button for desktop */}
        <li>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm font-medium transition duration-200"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </li>
      </ul>

      {/* Hamburger icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile nav */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-800 text-black dark:text-gray-300">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            />
          ))}
          {/* ✅ Theme toggle button for mobile */}
          <li className="mt-4">
            <button
              onClick={() => {
                toggleTheme();
                setNav(false);
              }}
              className="px-6 py-3 bg-gray-300 dark:bg-gray-600 rounded text-lg"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

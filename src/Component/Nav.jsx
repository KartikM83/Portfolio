import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Work", to: "work" },
    { name: "Projects", to: "projects" },
    { name: "Tech Stack", to: "techstack" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-900 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-exo uppercase tracking-wide">
          KARTIK MANKAR
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-exo text-sm uppercase">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#ffbd20] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 px-6 pb-4">
          <ul className="flex flex-col gap-4 font-exo text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-yellow-400 block"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;

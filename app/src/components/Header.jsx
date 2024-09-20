// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 left-0 w-full bg-gradient-to-b from-slate-950 to-transparent text-slate-100 p-2 shadow-lg backdrop-blur-xl z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/evolve_logo.png" alt="Evolve Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-slate-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-slate-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-slate-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/landing-page/bl.png';
import logo3 from '../../assets/landing-page/logo3.png'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-transparent text-white font-main">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo3} alt="Echozy Logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold">Echozy</span>
      </div>

      {/* Create Account Button */}
      <div>
        <Link to="/auth">
          <button className="border border-white text-textPrimary hover:bg-purple-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-xl font-semibold">
            Create Account
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


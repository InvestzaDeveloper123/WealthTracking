import React from "react";

function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* === Left Section === */}
        <div className="flex items-center">
          <h1 className="font-montserrat text-white text-2xl md:text-3xl font-normal tracking-tight">
            Investza
          </h1>
        </div>

        {/* === Right Section === */}
        <div className="flex items-center space-x-0 md:space-x-6">
          {/* Member Login */}
          <button
            className="text-white/90 hover:text-white transition-colors duration-300 text-xs md:text-base font-medium"
            aria-label="Member Login"
          >
            Download Wealth Tracker
          </button>
          <button className="gradient-button px-6 py-3 rounded-full text-white font-semibold cursor-pointer border-none">
            Review My Portfolio
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

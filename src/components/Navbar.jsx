import React from "react";

function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* === Left Section === */}
        <div className="flex items-center">
          {/* <h1 className="text-white font-playfair text-2xl md:text-3xl font-extrabold tracking-tight">
            Investza
          </h1> */}
          <h1 className="font-montserrat text-white text-2xl md:text-3xl font-normal tracking-tight">
            Investza
          </h1>
        </div>

        {/* === Right Section === */}
        <div className="flex items-center space-x-6">
          {/* Member Login */}
          <button
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
            aria-label="Member Login"
          >
            Download Wealth Tracker
          </button>

          {/* <button className="relative px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-500 border border-transparent bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 bg-origin-border">
            <div className="absolute inset-0.2 bg-black rounded-lg group-hover:bg-gray-900 transition-colors duration-300"></div>
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-purple-600 to-pink-600 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
              Review my portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button> */}
          <button className="gradient-button px-6 py-3 rounded-full text-white font-semibold cursor-pointer border-none">
            Review My Portfolio
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

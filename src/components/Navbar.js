import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo_kjs from "../assets/logo-kjs.png";

function Navbar() {
  return (
    <nav className="bg-white-kj p-4">
      <div className="flex items-center justify-between">
        {/* Company logo */}
        <div className="flex-shrink-0 pl-10 flex items-center">
          <img src={logo_kjs} alt="Company logo" className="h-15 w-10" />
          <span class="text-xl font-norwester font-extrabold whitespace-nowrap text-blue-800 uppercase mt-5 ml-2">Karyajaya</span>
        </div>

        {/* Menu options */}
        <div className="hidden md:flex items-center justify-center">
          <a href="/" className="font-norwester text-dark-blue-kj mx-4 hover:text-gray-300">
            HOME
          </a>
          <a href="/" className="font-norwester text-dark-blue-kj mx-4 hover:text-gray-300">
            PRODUCT
          </a>
          <a href="/" className="font-norwester text-dark-blue-kj mx-4 hover:text-gray-300">
            ABOUT US
          </a>
        </div>

        {/* Search bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full py-2 px-4 bg-grey-orange-kj text-white mr-2"
          />
          <button className="bg-orange-kj rounded-full p-2">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

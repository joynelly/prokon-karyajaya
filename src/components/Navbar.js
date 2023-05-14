import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo_kjs from "../assets/logo-kjs.png";

function Navbar() {
  return (
    <nav className="bg-white-kj px-20 py-5">
      <div className="flex items-center justify-between">
        {/* Company logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo_kjs} alt="Company logo" className="h-10" />
          <span class="text-3xl font-norwester font-extrabold whitespace-nowrap text-blue-800 uppercase mt-4 ml-2">Karyajaya</span>
        </div>

        {/* Menu options */}
        <div className="hidden md:flex items-center justify-center">
          <a href="/" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            HOME
          </a>
          <a href="/product" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            PRODUCT
          </a>
          <a href="/jasa" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            JASA
          </a>
          <a href="/aboutus" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
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
      <hr className="border-rose-500 border-b-2 mt-6"/>
    </nav>
  );
}

export default Navbar;
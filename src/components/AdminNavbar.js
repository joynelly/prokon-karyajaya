import React from "react";
import logo_kjs from "../assets/logo-kjs.png";

function AdminNavbar() {
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
          <a href="/adminlandingpage" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            DASHBOARD
          </a>
          <a href="/adminproductpage" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            PRODUCTS
          </a>
          <a href="/admincategorypage" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            CATEGORIES
          </a>
          <a href="/adminbrandpage" className="font-norwester text-lg text-dark-blue-kj mx-4 mt-4 hover:bg-orange-kj hover:rounded hover:px-5 hover:py-1">
            BRANDS
          </a>
        </div>

        {/* LogOut */}
        <div className="flex items-center">
            <button className="bg-white-kj rounded-full p-2 mt-4">
                <svg className="h-9 w-9 text-rose-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />  <line x1="12" y1="4" x2="12" y2="12" />
                </svg>
            </button>
        </div>
      </div>
      <hr className="border-rose-500 border-b-2 mt-6"/>
    </nav>
  );
}

export default AdminNavbar;
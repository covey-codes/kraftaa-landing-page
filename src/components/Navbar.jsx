import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import home from "../assets/images/home.png";
import services from "../assets/images/services.png";
import client from "../assets/images/client.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); 
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
     
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between h-16 mt-5 mx-5 rounded-full shadow-lg items-center px-10 py-5 bg-[#6828B0]">
     
      <img src={logo} alt="Logo" className="h-12" />

      
      <div className="md:hidden">
        <button
          ref={iconRef} 
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-white p-2 rounded-full focus:outline-none"
        >
          {isMenuOpen ? (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      
      <ul className="hidden md:flex space-x-10 text-white text-sm">
        <li className=" cursor-pointer hover:text-[#B1FA63]">Home</li>
        <li className=" cursor-pointer hover:text-[#B1FA63]">Services</li>
        <li className=" cursor-pointer hover:text-[#B1FA63]">Top Client</li>
      </ul>

      
      <button className="hidden md:block px-6 py-2 bg-black text-green-500 font-semibold text-sm rounded-full hover:bg-gray-800">
        Sign Up
      </button>

      
      {isMenuOpen && (
        <div
          ref={menuRef} 
          className="absolute top-16 right-5 w-[300px] bg-white rounded-lg shadow-lg p-5 flex flex-col items-center md:hidden"
        >
          <ul className="flex flex-col space-y-4 text-[#ABB0C0] text-sm text-center">
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src={home} alt="Home" className="w-5 h-5" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src={services} alt="Services" className="w-5 h-5" />
              <span>Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src={client} alt="Top Client" className="w-5 h-5" />
              <span>Top Client</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

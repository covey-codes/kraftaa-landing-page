import React from "react";
import { motion } from "framer-motion";
import { useNavbar } from "../Constants/useNavbar";
import {
  navbarAnimation,
  menuAnimation,
} from "../Animations/navbarAnimationVariants";

const Navbar: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen, menuRef, iconRef } = useNavbar();

  return (
    <motion.nav
      initial={navbarAnimation.initial}
      animate={navbarAnimation.animate}
      transition={navbarAnimation.transition}
      className="flex justify-between overflow-hidden mt-5 mx-5 rounded-full shadow-lg items-center px-5 py-2 bg-[#6828B0]"
    >
      <img src="/logo.png" alt="Logo" className="h-12" />

      <div className="lg:hidden md:hidden">
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

      <ul className="hidden md:flex space-x-10 text-white text-base font-bold">
        <li className="cursor-pointer hover:text-[#B1FA63]">Home</li>
        <li className="cursor-pointer hover:text-[#B1FA63]">Services</li>
        <li className="cursor-pointer hover:text-[#B1FA63]">Top Client</li>
      </ul>

      <button className="hidden md:block px-6 py-2 bg-black text-white font-bold text-sm rounded-full">
        Sign Up
      </button>

      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={menuAnimation.initial}
          animate={menuAnimation.animate}
          transition={menuAnimation.transition}
          className="absolute top-16 right-5 w-[200px] bg-white rounded-lg shadow-lg p-3 flex flex-col items-center md:hidden"
        >
          <ul className="flex flex-col space-y-4 text-[#ABB0C0] text-sm text-center">
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src="/home.png" alt="Home" className="w-5 h-5" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src="/services.png" alt="Services" className="w-5 h-5" />
              <span>Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:underline cursor-pointer">
              <img src="/client.png" alt="Top Client" className="w-5 h-5" />
              <span>Top Client</span>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

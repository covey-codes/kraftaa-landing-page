import React from 'react';
import logo from "../assets/images/logo.png";

const FooterSection = () => {
  return (
    <>
      {/* MOBILE FOOTER (Visible on small and medium screens) */}
      <div className="lg:hidden bg-black h-[200px] flex flex-col items-center justify-center">
        <img className="w-[200px]" src={logo} alt="logo" />
        <p className="text-[#B1FA63] text-1xl">Your personal <span className='text-[#B1FA63]'>Connection</span> to Local <span className='text-[#B1FA63]'>Experts...</span></p>
        <div className="flex text-sm justify-center items-start text-white">
          <ul className="m-5">Blog</ul>
          <ul className="m-5">About Us</ul>
          <ul className="m-5">Contact Us</ul>
          <ul className="m-5">FAQ</ul>
          <ul className="m-5">Privacy Policy</ul>
        </div>
      </div>

      {/* DESKTOP FOOTER (Visible only on large screens) */}
      <div className="hidden lg:flex flex-col items-center bg-black h-[200px]">
        <img className="w-[200px]" src={logo} alt="logo" />
        <p className="text-[#B1FA63] text-1xl">Your personal Connection to Local Experts...</p>
        <div className="flex justify-center items-start text-white">
          <ul className="m-5">Blog</ul>
          <ul className="m-5">About Us</ul>
          <ul className="m-5">Contact Us</ul>
          <ul className="m-5">FAQ</ul>
          <ul className="m-5">Privacy Policy</ul>
        </div>
      </div>
    </>
  );
};

export default FooterSection;

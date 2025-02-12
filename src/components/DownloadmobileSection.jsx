import React from 'react';
import logo from "../assets/images/logo.png";

const FooterSection = () => {
  return (
    <div className="mt-[20px] bg-gradient-to-b from-[#8407BA] to-[#6828B0] lg:bg-black h-[200px]">
      <div className="flex justify-center items-center flex-col">
        <img className="w-[200px]" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center">
        <p className="text-1xl lg:text-[#B1FA63]">
          Your personal Connection to Local Experts...
        </p>
      </div>
      <div className="flex justify-center items-start text-white">
        <ul className="m-5">Blog</ul>
        <ul className="m-5">About Us</ul>
        <ul className="m-5">Contact Us</ul>
        <ul className="m-5">FAQ</ul>
        <ul className="m-5">Privacy Policy</ul>
      </div>
    </div>
  );
};

export default FooterSection;

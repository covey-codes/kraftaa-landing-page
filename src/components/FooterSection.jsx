import React from 'react'
import logo from "../assets/images/logo.png";

const FooterSection = () => {
  return (
    <div className='mt-[20px] bg-black h-[200px]'>
        <div className='flex justify-center items-center flex-col'>
            <img className='w-[200px]' src={logo} alt="logo" />
        </div>
        <div className='flex justify-center'>
            <p className='text-xl text-[#B1FA63]'>Your personal Connection to Local Experts...</p>
        </div>
        <div className='flex justify-center items-start text-white'>
            <ul className='m-5'>Blog</ul>
            <ul className='m-5'>About Us</ul>
            <ul className='m-5'>Contact Us</ul>
            <ul className='m-5'>Faq</ul>
            <ul className='m-5'>Privacy policy</ul>
        </div>
    </div>
  )
}

export default FooterSection
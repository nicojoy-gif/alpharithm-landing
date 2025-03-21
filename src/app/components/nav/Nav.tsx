'use client'
import { useState } from "react";
import { CustomButton } from "../Customs";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center text-white px-6 md:px-16 py-6 mx-auto relative bg-dark-900 w-full">
      {/* Logo */}
      <Image src="/logo.svg" width={48} height={48} alt="logo" className="cursor-pointer" />

      {/* Desktop Menu */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6 font-medium">
          <li className="cursor-pointer hover:text-primaryBlue">Models</li>
          <li className="cursor-pointer hover:text-primaryBlue">Pricing</li>
          <li className="cursor-pointer hover:text-primaryBlue">About Us</li>
          <li className="cursor-pointer hover:text-primaryBlue">Contact Us</li>
          <li className="cursor-pointer hover:text-primaryBlue">Custom Models</li>
        </ul>
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-sm font-medium px-6 py-2 border border-white rounded-md hover:text-primaryBlue">
          Login
        </button>
        <CustomButton>Get Started Now</CustomButton>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center w-3/4 h-full bg-white text-black shadow-lg p-6">
          <button 
            className="self-end text-2xl mb-6" 
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-6 text-lg font-medium">
            <li className="cursor-pointer hover:text-primaryBlue">Models</li>
            <li className="cursor-pointer hover:text-primaryBlue">Pricing</li>
            <li className="cursor-pointer hover:text-primaryBlue">About Us</li>
            <li className="cursor-pointer hover:text-primaryBlue">Contact Us</li>
            <li className="cursor-pointer hover:text-primaryBlue">Custom Models</li>
          </ul>
          <button className="mt-6 text-dark-300 hover:text-primaryBlue">Login</button>
          <CustomButton className="mt-4">Get Started Now</CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

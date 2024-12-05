'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle, FaSearch, FaHeart, FaShoppingCart} from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative z-50 flex justify-between items-center p-4 bg-white text-black shadow-lg">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <h1 className="font-bold hover:cursor-pointer">
            <b>
              <i><a href="/">FASHIONHOLICS.</a></i>
            </b>
          </h1>
        </div>

        {/* Center Section: Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-400">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
           Send FeedBack
          </a>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden md:flex space-x-4">
          <FaUserCircle className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaSearch className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaHeart className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>

        {/* Mobile View: Hamburger/Cross Icon */}
        <div className="flex md:hidden">
          {isOpen ? (
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu: Portrait Side Bar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-orange-500 font-bold shadow-lg transition-transform transform duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <AiOutlineClose
              className="text-2xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col space-y-4 mt-4 px-6">
            <a
              href="/"
              className="text-white hover:text-gray-300 cursor-pointer text-lg"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-white hover:text-gray-300 cursor-pointer text-lg"
              onClick={toggleMenu}
            >
              Shop
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-300 cursor-pointer text-lg"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 cursor-pointer text-lg"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

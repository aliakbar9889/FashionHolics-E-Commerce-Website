import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 mt-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold"><b>FASHIONHOLICS.</b></h2>
          <p className="text-gray-700">
            Our Company is dedicated to providing top-notch Products with quality and care. Join us on our journey to excellence.
          </p>
        </div>

        {/* Center Left Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" transition">Home</a>
            </li>
            <li>
              <a href="#" className=" transition">About Us</a>
            </li>
            <li>
              <a href="#" className=" transition">Services</a>
            </li>
          </ul>
        </div>

        {/* Center Right Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Help</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" transition">Payment Option</a>
            </li>
            <li>
              <a href="#" className=" transition">Return</a>
            </li>
            <li>
              <a href="#" className=" transition">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Stay Connected</h2>
          <p className="text-gray-700">
            Subscribe to our newsletter for updates and exclusive offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black border border-gray-600 rounded-md focus:ring-2 focus:ring-black-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Importing Image from next/image

const ProductPage = () => {
  // State to keep track of the number
  const [quantity, setQuantity] = useState(0);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex min-h-screen p-6 bg-white flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 mb-6 md:mb-0 md:w-1/2">
        <Image
          src="/pic2.png"
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Winter Monarch Jacket</h2>
        
        {/* Paragraph */}
        <p className="text-lg mb-4">
          Insulated puffer jacket with down feathers for unbeatable warmth and style.
        </p>

        {/* Line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Price */}
        <h4 className="text-xl font-medium mb-4">
          <b>Price:</b> <i>&#36;190</i>
        </h4>
        <h4 className="text-xl font-medium mb-4">
          <b>Select Quantity</b>
        </h4>

        {/* Quantity Control */}
        <div className="flex items-center gap-4 mb-6">
          <button
            className="bg-gray-200 text-xl p-2 rounded"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 text-xl p-2 rounded"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-orange-700 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-xl"
        >
          Add to Cart
        </button>

        {/* Additional Product Details Section */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-2">Description:</h4>
          <p className="text-lg mb-4">
            The Winter Monarch Jacket is the epitome of warmth, comfort, and style, perfect for the colder months. Crafted with high-quality materials, it offers superior insulation to keep you cozy even in freezing temperatures. Its sleek design features a blend of modern aesthetics and functional elements, making it a versatile addition to any winter wardrobe.
          </p>

          <h4 className="text-xl font-semibold mb-2">Material:</h4>
          <p className="text-lg mb-4">
            Made from durable, water-resistant fabric, this jacket ensures you stay dry even in light snow or rain. The interior is lined with soft, high-performance insulation that traps body heat, keeping you warm without the bulk.
          </p>

          <h4 className="text-xl font-semibold mb-2">Design:</h4>
          <p className="text-lg mb-4">
            The Winter Monarch Jacket boasts a tailored fit with a sophisticated silhouette that flatters all body types. It includes adjustable cuffs, a high collar, and a secure zippered front to seal out the cold. The jacket also features multiple pockets, offering both functionality and convenience to store essentials.
          </p>

          <h4 className="text-xl font-semibold mb-2">Color Options:</h4>
          <p className="text-lg mb-4">
            Available in a variety of classic and contemporary colors, the Winter Monarch Jacket allows you to choose the style that best fits your personality.
          </p>

          <h4 className="text-xl font-semibold mb-2">Features:</h4>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Windproof &amp; Waterproof: Shield yourself from harsh winds and light rain with the jacket&apos;s windproof and waterproof exterior.
            </li>
            <li>
              Adjustable Fit: The adjustable drawcord at the waist and hem allows for a customized fit, ensuring comfort without sacrificing style.
            </li>
            <li>
              Breathable: Despite its insulating properties, the jacket is breathable, preventing overheating and ensuring you remain comfortable during outdoor activities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

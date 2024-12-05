import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

const Page = () => {
  return (
    <div data-aos="fade-up" className="h-full bg-orange-100 flex flex-col items-center p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Products</h1>

      {/* Card Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-7xl"
      >
        {/* Card List */}
        {[
          { id: 1, src: '/pic1.png', name: 'Regal Heritage', description: 'A classic wool blend jacket offering warmth and sophistication for every occasion.', price: '$150' },
          { id: 2, src: '/pic2.png', name: 'Urban Maverick', description: 'Lightweight and durable faux leather jacket, perfect for modern style enthusiasts.', price: '$120' },
          { id: 3, src: '/pic3.png', name: 'Vintage Valor', description: 'High-quality suede finish, detailed stitching, and a soft, breathable lining for comfort.', price: '$170' },
          { id: 4, src: '/pic4.png', name: 'Alpine Guardian', description: 'Weather-resistant jacket designed for outdoor adventures, keeping you stylish and protected.', price: '$180' },
          { id: 5, src: '/pic5.png', name: 'Luxe Noir', description: 'Soft genuine leather with a satin lining, perfect for elegant, formal occasions.', price: '$200' },
          { id: 6, src: '/pic6.png', name: 'Classic Gentleman', description: 'A tailored wool jacket that offers traditional style and versatile comfort for any occasion.', price: '$140' },
          { id: 7, src: '/pic7.png', name: 'Midnight Rider', description: 'Premium cowhide leather with metal accents, perfect for those with a bold, edgy style.', price: '$160' },
          { id: 8, src: '/pic8.png', name: 'Winter Monarch', description: 'Insulated puffer jacket with down feathers for unbeatable warmth and style.', price: '$190' },
          { id: 9, src: '/pic9.png', name: 'Coastal Breeze', description: 'Lightweight cotton canvas jacket perfect for mild weather and casual styling.', price: '$110' },
        ].map(({ id, src, name, description, price }) => (
          <div
            key={id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            {/* Image */}
            <Image
              src={src}
              alt={name}
              width={400}  // You can set the width and height for proper sizing
              height={500}  // Adjust these values as needed
              className="w-full object-cover"
            />
            {/* Overlay & Button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
                <Link href="/detail"> Add to Cart</Link>
              </button>
            </div>
            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

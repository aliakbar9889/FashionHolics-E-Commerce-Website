import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div
        data-aos="zoom-in-right"
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to FashionHolics
        </h1>
        {/* Paragraph */}
        <p className="text-lg text-gray-200 md:text-xl mt-4">
          <i>Premium Jackets for Every Season</i>
        </p>
      </div>

      {/* Overlay Color */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </div>
  );
};

export default HeroSection;

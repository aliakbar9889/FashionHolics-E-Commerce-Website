import React from 'react';

const Page2 = () => {
    return (
        <div data-aos="fade-up" className="min-h-screen flex flex-col md:flex-row items-center justify-between p-4 bg-white">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">About <span className='text-gray-600'>Fashionholics.</span></h1>
                <p className="text-gray-600 text-lg">
                    <i>Fashionholics is a brand inspired by timeless elegance and sophistication, specializing in premium classical jackets. Each piece in our collection is meticulously crafted to reflect a perfect blend of tradition and modernity. We use only the finest materials, ensuring every jacket offers exceptional comfort, durability, and a luxurious feel. At Fashionholics, we believe that a well-crafted jacket is more than just an outfit—it’s a statement of confidence and individuality. Our designs cater to those who value quality and style, making our jackets ideal for formal events, casual outings, or any occasion where you want to stand out.
                       At Fashionholics, we prioritize our customers by delivering impeccable craftsmanship and unique designs that remain evergreen in the ever-changing world of fashion. Whether you’re looking for a jacket that enhances your professional attire or a piece that adds flair to your everyday look, Fashionholics has something for you. Step into the world of elegance and redefine your style with our exclusive collection. With Fashionholics, you don’t just wear a jacket—you wear a legacy of fashion and excellence.</i>
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 hover:cursor-pointer">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <video
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src="/video1.mp4" // Replace with your video file path
                        autoPlay
                        loop
                        muted
                        controls={false} // Remove controls for a cleaner look
                    ></video>
                </div>
            </div>
        </div>
    );
};

export default Page2;

'use client';

import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const FeedbackPage = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'Kashan Ali',
      feedback: 'Amazing service, highly recommend!',
      profilePic: "/card4.jpg",
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'The team was very professional and helpful!',
      profilePic: "/card2.jpg",
    },
    {
      id: 3,
      name: 'Chris Brown',
      feedback: 'Fast and reliable service, will use again!',
      profilePic: "/card3.jpg",
    },
    {
      id: 4,
      name: 'Jahanzeb Qamar',
      feedback: 'Excellent customer support and quality!',
      profilePic: "/card5.jpg",
    },
    {
      id: 5,
      name: 'Mark Wilson',
      feedback: 'Very satisfied with the overall experience!',
      profilePic: "/card1.jpg",
    },
    {
      id: 6,
      name: 'Laiba Ilyas',
      feedback: 'Adorable and awesome Product!',
      profilePic: "/card6.jpg",
    },
  ];

  return (
    <div data-aos="fade-up" className="min-h-screen p-6 bg-white flex flex-col items-center justify-center">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Customers Feedback</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-6 bg-gray-100 border border-black rounded-lg flex flex-col items-center text-center  cursor-pointer"
          >
            <Image
              src={feedback.profilePic}
              alt={feedback.name}
              width={96}  // Width for profile picture
              height={96} // Height for profile picture
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{feedback.name}</h2>
            <p className="text-gray-600 mt-2">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;

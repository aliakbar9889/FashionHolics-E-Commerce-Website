'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Submitted Successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSuccessMessage('Error sending the message.');
      }
    } catch {
      // Instead of declaring `error`, directly set the error message
      setSuccessMessage('Something went wrong.');
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="mx-auto mt-8 h-full mb-5 w-full max-w-3xl bg-white p-6 sm:p-8 rounded-lg sm:shadow-lg shadow-none"
    >
      {/* Top Section */}
      <div data-aos="flip-left" className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold italic text-gray-800">
          Give Your Feedback!
        </h2>
      </div>

      {/* Center Section */}
      <form
        data-aos="fade-up"
        onSubmit={handleSubmit}
        className="grid gap-4 sm:gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 h-36 resize-none"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold rounded transition"
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-center text-green-500 text-lg font-medium">
          {successMessage}
        </p>
      )}
    </div>
  );
}

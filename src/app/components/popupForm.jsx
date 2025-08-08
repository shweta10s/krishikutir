'use client';

import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! Your message has been submitted.');
    setShowPopup(false);
  };

  return (
    <>
      {/* Toast Notification */}
      <Toaster position="top-right" reverseOrder={false} />

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] p-6 sm:p-8 relative shadow-xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-gray-600 text-3xl hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            {/* Form Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="p-3 sm:p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="p-3 sm:p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="p-3 sm:p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    className="p-3 sm:p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-gray-700 text-sm sm:text-base">
                  Type your message
                </label>
                <textarea
                  rows="3"
                  placeholder="Message..."
                  className="p-3 sm:p-4 bg-gray-100 text-gray-700 rounded resize-none focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300"
              >
                Send your message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;

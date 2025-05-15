
import React from 'react';
import Contact from './Contact'; // Import the Contact form

const BackgroundVideo = () => {
  return (
    <div id="Home" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      {/* Main content (Text and Contact form) */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full text-white p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left side: Text content */}
        <div className="w-full md:w-2/3  flex flex-col justify-center items-start text-center md:text-left">
          <h1 className="text-purple-800 text-5xl md:text-5xl font-semibold">
            Your Path <span className="text-purple-400">to Academic Success!</span>
          </h1>
          <p className="mt-4 text-lg">Empowering You to Shine in Every Assignment.</p>
          <p className="mt-4 text-lg">
            Trusted by <span className="text-lg font-bold text-black">1.5M+</span> happy customers
          </p>
        </div>

        {/* Right side: Contact form */}
        <div className="w-full md:w-1/3 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <Contact /> {/* Display the Contact form */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;

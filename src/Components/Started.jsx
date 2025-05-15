import React from 'react';

const Started = () => {
    return (
<section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
    <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="grade1.mp4"  
    ></video>
    <div className="relative z-10">
        <h2 className="mb-32 text-4xl font-bold text-gray-900">
            Get Your Assignments Done with Ease!
        </h2>
        <p className="mb-3 text-lg text-gray-600">
            Expert help tailored to your needs.
        </p>
        <a
            href="#services"
            className="mt-15 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
            Get Started
        </a>
    </div>
</section>
);
};
export default Started;

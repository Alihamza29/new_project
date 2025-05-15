
import React from 'react';

const About = () => {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are dedicated to delivering top-quality services that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col justify-center items-start space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                At <span className="text-2xl font-bold" style={{ color: '#4259C3' }}>
                  Malaysian<span className="text-blue-500">Assignments</span>
                </span>,
                our mission is to provide expert guidance and support to students across all subjects and academic challenges.
                We are committed to helping you succeed by offering tailored solutions, resources, and assistance for every assignment,
                ensuring you achieve your academic goals with ease and confidence.
              </p>
            </div>

           
            <div className="bg-gray-100 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <video
                   autoPlay
                   loop
                  src="/writing.mp4"
                  alt="Abdul Rehman, CEO"
                />
              </div>
            </div>
          </div>

        
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-indigo-600">10+</div>
              <p className="mt-2 text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-indigo-600">1000+</div>
              <p className="mt-2 text-gray-600">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-indigo-600">100%</div>
              <p className="mt-2 text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

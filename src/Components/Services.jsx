
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate('/Contact'); 
  };

  return (
    <div className='bg-purple-200'>
      <section id="services" className="container mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
            <h3 className="text-xl font-semibold">Assignments</h3>
            <p className="mt-2 text-gray-600">
            Expert assistance to complete academic assignments on time.
            </p>
          </div>
          <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
            <h3 className="text-xl font-semibold">Exams</h3>
            <p className="mt-2 text-gray-600">
            Preparation and tutoring services to help you ace your exams.
            </p>
          </div>
          <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
            <h3 className="text-xl font-semibold">Research/thesis</h3>
            <p className="mt-2 text-gray-600">
               Comprehensive research and thesis writing support for academic success
            </p>
          </div>
          
          <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
             <h3 className="text-xl font-semibold">Quizzes</h3>
             <p className="mt-2 text-gray-600">Quick and effective help for acing quizzes across subjects.</p>
           </div>
           <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
            <h3 className="text-xl font-semibold">Projects</h3>
             <p className="mt-2 text-gray-600">Professional guidance to complete academic and professional projects.</p>
           </div>
           <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
             <h3 className="text-xl font-semibold">Graphic Design</h3>
             <p className="mt-2 text-gray-600">Creative designs to bring your ideas to life with stunning visuals.</p>
           </div>
           <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
             <h3 className="text-xl font-semibold">UI/UX</h3>
             <p className="mt-2 text-gray-600">User-centric designs focused on seamless and intuitive experiences.</p>
           </div>
           <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
             <h3 className="text-xl font-semibold">Software development</h3>
             <p className="mt-2 text-gray-600">Custom software solutions tailored to your business needs.</p>
           </div>
           <div className="p-6 border rounded shadow-md cursor-pointer hover:bg-purple-300 shadow-2xl transition-transform duration-300" onClick={handleCardClick}>
             <h3 className="text-xl font-semibold">website development</h3>
             <p className="mt-2 text-gray-600">Modern and responsive websites built for performance and growth.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

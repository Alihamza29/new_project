
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BackgroundVideo from './Components/BackgroundVideo';
import Started from './Components/Started';
import Services from './Components/Services';
import Review from './Components/Review';
import Contact from './Components/Contact'; // Ensure this is the right path
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && reviewText) {
      setReviews([...reviews, { name, text: reviewText }]);
      setName('');
      setReviewText('');
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <section id="home">
        <BackgroundVideo />
      </section>
              
              <Started />
              <section id="Services">
              <Services />
              </section>
              <Review 
                reviews={reviews} 
                name={name} 
                setName={setName} 
                reviewText={reviewText} 
                setReviewText={setReviewText} 
                handleSubmit={handleSubmit} 
              />
              <section id="about">
              <About />
              </section>
                
            </>
          } />
          
          <Route path="/contact" element={<ContactPage />} />
        
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

const ContactPage = () => (
  
  <section id="contact" className="relative w-full h-screen bg-purple-100 border-2">
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-full max-w-lg">
        <Contact />
      </div>
    </div>
  </section>

);


export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/reviews');
        setReviews(response.data); 
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newReview = {
      name,
      text: reviewText,
    };

    try {
      
      const response = await axios.post('http://localhost:4000/api/v1/reviews/submit', newReview);
      console.log(response.data.message); 

      
      setReviews([...reviews, newReview]);

      
      setName('');
      setReviewText('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
      <section className="bg-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">What Our Clients Say</h2>
          <p className="text-lg text-center text-gray-600 mt-4">We value your feedback and strive to improve with every review.</p>

          {/* Review Form */}
          <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 p-4 border border-gray-300 rounded mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="flex-1 p-4 border border-gray-300 rounded mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="2"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>

          
          <div className="mt-12">
            {reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <blockquote className="text-xl italic text-gray-700">
                      "{review.text}"
                    </blockquote>
                    <cite className="mt-4 block text-right font-semibold text-gray-800">- {review.name}</cite>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center mt-4">No reviews yet. Be the first to share your experience!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;

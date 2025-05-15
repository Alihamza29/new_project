
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('course', course);
    formData.append('phone', `${countryCode} ${phone}`);
    formData.append('description', description);
    formData.append('deadline', deadline);
    formData.append('pages', pages);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/message/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFeedback({ message: 'Message sent successfully!', type: 'success' });
      console.log(response.data);
    } catch (error) {
      setFeedback({ message: 'Failed to send message. Please try again.', type: 'error' });
      console.error('Error sending message:', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      
      {feedback.type === 'success' ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-black text-3xl font-bold">
            {feedback.message}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          
          <div className="grid grid-cols-2 gap-4 text-black">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>

         
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject/Course"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-2 border rounded w-full text-black"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>

        
          <textarea
            placeholder="Brief Description about your work"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded w-full text-black"
            rows="3"
            required
          />

          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="p-2 border rounded w-full text-black"
              required
            />
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              className="p-2 border rounded w-full text-black"
              min="1"
              step="1"
              required
            />
          </div>

        
          <div>
            <label className="block mb-1 text-black">Upload File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="p-2 border rounded w-full cursor-pointer"
            />
          </div>

         
          <button
            type="submit"
            className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Do Assignment'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import axios from 'axios';

const FormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/form", formData);
      if (response.status === 200) {
        setSuccess(true);
        setError(false);
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <section id="form" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="text-lg text-gray-400 mt-4">
          Feel free to reach out with any questions or inquiries. We would love to hear from you!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-2xl mx-auto space-y-6 p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none transition-all"
        >
          Send Message
        </button>

        {success && (
          <div className="text-green-500 mt-4">Your message has been sent successfully!</div>
        )}
        {error && (
          <div className="text-red-500 mt-4">There was an error sending your message. Please try again later.</div>
        )}
      </form>
    </section>
  );
};

export default FormSection;

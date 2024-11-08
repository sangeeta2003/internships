import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', statement: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/apply", formData);
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <div id="apply" className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apply to Proviz School of AI</h3>
      {success && <div className="text-green-500 mb-4">Your application has been submitted successfully!</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="statement"
          value={formData.statement}
          onChange={handleChange}
          placeholder="Why do you want to study AI?"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;

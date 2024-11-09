import React, { useState } from 'react';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted!');
    // You can handle submission logic here (e.g., POST request to a server)
  };

  return (
    <section id="apply" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Apply to Proviz School of AI</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Course</option>
              <option value="AI Basics">AI Basics</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-all">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplyPage;

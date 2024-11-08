import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to a backend or API here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
        <p className="text-lg text-gray-400 mt-4">We'd love to hear from you! Please reach out with any questions or feedback.</p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          >
            Send Message
          </button>
        </form>
        
        {/* Success Message */}
        {submitted && (
          <div className="mt-6 text-green-500">
            <p>Thank you for reaching out! We will get back to you soon.</p>
          </div>
        )}
      </div>

      {/* Location Map */}
      <div className="mt-16">
        <h3 className="text-2xl text-center text-white">Our Location</h3>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.711471724565!2d-73.98569158540077!3d40.74881777932751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae2e4ad0b7%3A0x7e490540af7392fb!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1668204137781!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

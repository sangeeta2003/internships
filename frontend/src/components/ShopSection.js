import React from 'react';

const ShopSection = () => {
  const products = [
    { name: 'AI for Beginners', price: '$29.99', description: 'Learn the basics of Artificial Intelligence with this comprehensive course.' },
    { name: 'Mastering Machine Learning', price: '$49.99', description: 'A deeper dive into machine learning algorithms and their applications.' },
    { name: 'AI Ethics and Society', price: '$39.99', description: 'Understand the ethical implications of AI technologies and their role in society.' },
    { name: 'Deep Learning with Python', price: '$59.99', description: 'Master deep learning concepts and applications using Python.' },
  ];

  return (
    <section id="shop" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white">Shop AI Courses & Materials</h2>
        <p className="text-lg text-gray-400 mt-4">
          Purchase AI-related courses, books, and more to enhance your knowledge and skills.
        </p>
      </div>

      {/* Products List */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
            <p className="text-lg text-gray-300 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-purple-500">{product.price}</span>
            </div>
            <button
              className="mt-6 w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none transition-all"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;

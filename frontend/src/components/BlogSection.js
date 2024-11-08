import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    { title: "Getting Started with AI", description: "An introduction to AI basics." },
    { title: "How AI Transforms Industries", description: "Impact of AI on various sectors." }
  ];

  return (
    <section className="bg-gray-900 py-20 text-center">
      <h2 className="text-4xl font-semibold text-white">Our Latest Blogs</h2>
      <div className="max-w-4xl mx-auto mt-10 space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
            <p className="text-gray-400 mt-4">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

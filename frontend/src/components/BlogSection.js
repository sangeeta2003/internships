import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    { title: "Getting Started with AI", description: "An introduction to AI basics." },
    { title: "How AI Transforms Industries", description: "Impact of AI on various sectors." }
  ];

  return (
    <section id="blog" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-semibold text-gray-800">Our Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-lg text-gray-600 mt-2">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

// frontend/src/components/BlogSection.js
import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blog posts:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 text-center">
      <h2 className="text-5xl font-bold text-white tracking-wider">
        Our Latest Blogs
      </h2>
      {error ? (
        <p className="text-red-300 mt-4 text-xl">Error: {error}</p>
      ) : (
        <div className="max-w-6xl mx-auto mt-12 space-y-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              >
                <h3 className="text-3xl font-semibold text-indigo-800 hover:text-purple-700">
                  {post.title}
                </h3>
                <p className="text-gray-500 mt-4">{post.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-200 mt-4 text-xl">No blog posts available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default BlogSection;

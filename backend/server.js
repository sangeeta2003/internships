// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const Blog = require('./models/Blog');  // Import the Blog model

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB


mongoose.connect(process.env.MONGO_URI, {
  // Options like useNewUrlParser and useUnifiedTopology are no longer needed
})
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('MongoDB connection error:', error));


// Application submission endpoint
const Application = require('./models/Application');
app.post('/apply', async (req, res) => {
  const { name, email, phone, statement } = req.body;
  const application = new Application({ name, email, phone, statement });

  try {
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting application' });
  }
});

// Blog post submission endpoint
app.post('/blogs', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const blog = new Blog({ title, description });

  try {
    await blog.save();
    res.status(201).json({ message: 'Blog post added successfully!' });
  } catch (error) {
    console.error('Error adding blog post:', error);
    res.status(500).json({ error: error.message || 'Error adding blog post' });
  }
});



// Fetch blog posts endpoint
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog posts' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

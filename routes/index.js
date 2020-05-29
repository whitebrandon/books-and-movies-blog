const express = require('express');
const router = express.Router();
const blogPost = require('../models/blogpost');

// GET / - responds with all blog posts
router.get('/', async (req, res) => {
  const blogs = await blogPost.find();
  if (blogs) {
    return res.json(blogs);
  }
  return res.send('Something went wrong!');
});

// GET /:id - responds with blog post with a matching _id
router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const blog = await blogPost.findOne({_id});
  if (blog) {
    return res.json(blog);
  }
  return res.send('Something went wrong!');
});

// POST / - adds a new blog post to database, and sends post back to client
router.post('/', async (req, res) => {
  const newPost = req.body;
  const blog = await new blogPost(newPost).save();
  if (blog) {
    return res.json(blog);
  }
  return res.send('Something went wrong');
})

// PUT /:_id - updates a blog post and returns the updated post back to client
router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const updatedPost = req.body;
  const updatedBlog = await blogPost.findOneAndUpdate(_id, updatedPost, { new: true });
  if (updatedBlog) {
    return res.json(updatedBlog);
  }
  return res.send('Something went wrong');
})

// DELETE /:_id - deletes a blog post and returns nothing
router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  const message = await blogPost.deleteOne({_id});
  if (message.ok === 1) {
    return res.status(204).send();
  }
  return res.send('Something went wrong');
})

module.exports = router;
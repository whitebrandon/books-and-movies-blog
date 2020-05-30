const express = require('express');
const router = express.Router();
const rhymes = require('../models/rhymes');

// GET / - responds with all blog posts
router.get('/', async (req, res) => {
  const rhmyes = await rhymes.find();
  if (rhymes) {
    return res.json(blogs);
  }
  return res.send('Something went wrong!');
});

// GET /:id - responds with blog post with a matching _id
router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const rhmyes = await rhymes.findOne({_id});
  if (rhymes) {
    return res.json(blog);
  }
  return res.send('Something went wrong!');
});

// POST / - adds a new blog post to database, and sends post back to client
router.post('/', async (req, res) => {
  const newLyrics = req.body;
  const rhymes = await new rhymes(newLyrics).save();
  if (rhymes) {
    return res.json(blog);
  }
  return res.send('Something went wrong');
})

// PUT /:_id - updates a blog post and returns the updated post back to client
router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const updatedLyrics = req.body;
  const rhymes = await rhymes.findOneAndUpdate(_id, updatedLyrics, { new: true });
  if (rhymes) {
    return res.json(updatedBlog);
  }
  return res.send('Something went wrong');
})

// DELETE /:_id - deletes a blog post and returns nothing
router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  const query = await rhymes.deleteOne({_id});
  if (query.ok === 1) {
    return res.status(204).send();
  }
  return res.send('Something went wrong');
})

module.exports = router;
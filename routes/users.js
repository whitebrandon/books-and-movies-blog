const express = require('express');
const router = express.Router();
const user = require('../models/user');

// GET / - responds with all blog posts
router.get('/', async (req, res) => {
  // do stuff here
  
  return res.send('Something went wrong!');
});

// GET /:id - responds with blog post with a matching _id
router.get('/:_id', async (req, res) => {
  // do stuff here
  
  return res.send('Something went wrong!');
});

// POST / - adds a new blog post to database, and sends post back to client
router.post('/', async (req, res) => {
  // do stuff here
  
  return res.send('Something went wrong!');
})

// PUT /:_id - updates a blog post and returns the updated post back to client
router.put('/:_id', async (req, res) => {
  // do stuff here
  
  return res.send('Something went wrong!');
})

// DELETE /:_id - deletes a blog post and returns nothing
router.delete('/:_id', async (req, res) => {
  // do stuff here
  
  return res.send('Something went wrong!');
})

module.exports = router;
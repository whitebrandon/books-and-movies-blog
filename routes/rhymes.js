const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, rhymesController } = require('../controllers');

// GET / - returns all rhymes belonging to a user
router.get('/');

// POST / - adds a new rhyme to user's collection
router.post('/')

// GET /:id - returns a rhyme from user's collection
router.get('/:_id');

// PUT /:_id - updates a rhyme in user's collection and returns it
router.put('/:_id')

// DELETE /:_id - deletes a rhyme from user's collection and returns nothing
router.delete('/:_id')

module.exports = router;
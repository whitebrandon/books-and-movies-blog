const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, bookController } = require('../controllers');

// GET /
router.get('/');

// POST /
router.post('/')

// GET /:_bookId
router.get('/:_bookId');

// PUT /:_bookId
router.put('/:_bookId')

// DELETE /:_bookId
router.delete('/:_bookId')

module.exports = router;
const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, bookController } = require('../controllers');

// BASE URL: /api/books

// GET /
router.get('/', asyncHandler((req, res) => bookController.getBookCollection(req, res)));

// POST /
router.post('/')

// GET /:_bookId
router.get('/:_bookId');

// PUT /:_bookId
router.put('/:_bookId')

// DELETE /:_bookId
router.delete('/:_bookId')

module.exports = router;
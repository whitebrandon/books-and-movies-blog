const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, bookController } = require('../controllers');

// BASE URL: /api/books

// GET /
router.get('/', authenticateUser, asyncHandler((req, res) => bookController.getBookCollection(req, res)));

// POST /
router.post('/', authenticateUser, asyncHandler((req, res) => bookController.createBook(req, res)));

// GET /:_bookId
router.get('/:_bookId', authenticateUser, asyncHandler((req, res) => bookController.getBook(req, res)));

// PUT /:_bookId
router.put('/:_bookId', authenticateUser, asyncHandler((req, res) => bookController.updateBook(req, res)))

// DELETE /:_bookId
router.delete('/:_bookId', authenticateUser, asyncHandler((req, res) => bookController.deleteBook(req, res)))

module.exports = router;
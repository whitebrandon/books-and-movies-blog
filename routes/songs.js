const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, songController } = require('../controllers');

// GET /
router.get('/');

// POST /
router.post('/')

// GET /:id
router.get('/:_id');

// PUT /:_id
router.put('/:_id')

// DELETE /:_id
router.delete('/:_id')

module.exports = router;
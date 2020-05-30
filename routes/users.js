const express = require('express');
const router = express.Router();
const { asyncHandler, authenticateUser, userController } = require('../controllers');

// GET / - returns authenticated user if user valid
router.get('/', authenticateUser, asyncHandler((req, res) => userController.getUser(req, res)));

// POST / - adds a new user to database, and returns back to client
router.post('/', asyncHandler((req, res) => userController.createUser(req, res)));

// PUT /:_id - updates an authenticated user and returns back to client if user valid
router.put('/:_id', authenticateUser, asyncHandler((req, res) => userController.updateUser(req, res)));

// DELETE /:_id - deletes an authenticated user if valid, and returns nothing
router.delete('/:_id', authenticateUser, asyncHandler((req, res) => userController.deleteUser(req, res)));

module.exports = router;
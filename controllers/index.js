'use strict';

const auth = require('basic-auth');

const User = require('../models/user');

const userController = require('./userController');
const bookController = require('./bookController');
const songController = require('./songController');
const rhymeController = require('./rhymeController');

module.exports = {

  /**
   * wraps callback {controller functions} in try/catch
   * @param {Function} callback - controller that handles model query and responds to http request
   */
  asyncHandler: (callback) => async (req, res, next) => {
    try {
      //console.log('THIS IS JUST A TEST: ', req.user);
      callback(req, res, next);
    } catch (err) {
      console.log(err)
    }
  },

  /**
   * middleware function that authenticates user
   */
  authenticateUser: async (req, res, next) => {
    try {
      // steps to authenticate user go here
      const user = auth(req);
      if (user && user.name && user.pass) {
        User.find({username: user.name}, (error, result) => {
          if (error) {
            console.error('Error: ', error)
          }
          req.user = result;
          next();
        })
      } else {
        res.status(401).send(Error('Not Authorized', 'controllers/index.js', '43'));
      }
    } catch (err) {
      console.log(err);
    }
  },

  // contains all userController methods
  userController,

  // contains all bookController methods
  bookController,

  // contains all songController methods
  songController,

  // contains all rhymesController methods
  rhymeController,

}
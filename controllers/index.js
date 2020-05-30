'use strict';

const userController = require('./userController');
const bookController = require('./bookController');
const songController = require('./songController');
const rhymesController = require('./rhymesController');

module.exports = {

  /**
   * wraps callback {controller functions} in try/catch
   * @param {Function} callback - controller that handles model query and responds to http request
   */
  asyncHandler: (callback) => async (req, res, next) => {
    try {
      await callback(req, res, next);
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
      next();
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
  rhymesController,

}
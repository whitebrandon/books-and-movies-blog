'use strict';

const User = require('../models/user');

module.exports = {
  /**
   * 
   */
  getUser: (req, res) => {
    const message = "This set up works || Here's the host: " + req.headers.host;
    return res.send(message);
  },

  /**
   * 
   */
  createUser: (req, res) => {
    return res.send('Route not set up yet')
  },

  /**
   * 
   */
  updateUser: (req, res) => {
    return res.send('Route not set up yet')
  },

  /**
   * 
   */
  deleteUser: (req, res) => {
    return res.send('Route not set up yet')
  }
}
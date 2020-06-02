'use strict';

const User = require('../models/user');

module.exports = {
  /**
   * 
   */
  getUser: (req, res) => {
    //const message = "This set up works || Here's the host: " + req.headers.host;
    //return res.send(message);
    User.find({}, (error, results) => {
      if (error) {
        return console.error("There was an error: ", error)
      }
      console.log(results);
      return res.status(200).json(results);
    })
  },

  /**
   * 
   */
  createUser: (req, res) => {
    const user = new User(req.body);
    user.save(req.body, (error, result) => {
      if (error) {
        console.error("There was an error: ", error)
      }
      return res.status(201).json(result);
    })
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
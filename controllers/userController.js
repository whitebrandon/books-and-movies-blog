'use strict';

const User = require('../models/user');

module.exports = {
  /**
   * 
   */
  getUser: (req, res) => {
    User.find({}, (error, results) => {
      if (error) {
        return console.error("There was an error: ", error)
      }
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
    User.findByIdAndUpdate(req.params._id, req.body, {new: true}, (error, result) => {
      if (error) {
        console.error("There was an error: ", error)
      }
      return res.status(204).send();
    })
  },

  /**
   * 
   */
  deleteUser: (req, res) => {
    User.findByIdAndDelete(req.params._id, (error, result) => {
      if (error) {
        console.error("There was an error: ", error)
      }
      return res.status(204).send();
    })
  }
}
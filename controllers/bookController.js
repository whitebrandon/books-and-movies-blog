'use strict';

const Book = require('../models/book');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  /**
   * 
   */
  getBookCollection: (req, res) => {
    Book.find(req.user ? {owners: req.user[0]._id} : {}, (error, results) => {
      if (error) {
        return console.error("There was an error: ", error);
      }
      return res.status(200).json(results);
    })
  },

  /**
   * 
   */
  createBook: (req, res) => {
    if (req.user) {
      req.body.owners = req.user[0]._id;
      Book.create(req.body, (error, result) => {
        if (error) {
          return res.status(400).send(error.message);
        }
        return res.status(201).json(result);
      })
    } else {
      res.status(401).send('Not Authorized')
    }
  },

  /**
   * 
   */
  getBook: (req, res) => {
    if (req.user) {
      Book.findById(req.params._bookId, (error, results) => {
        if (error) {
          return res.status(404).send(error.message);
        }
        return res.json(results)
      })
    } else {
      res.status(401).send('Not Authorized')
    }
  },

  /**
   * 
   */
  updateBook: (req, res) => {
    if (req.user) {
      Book.findByIdAndUpdate(req.params._bookId, req.body, {new: true}, (error, result) => {
        if (error) {
          return res.status(400).send(error.message);
        }
        if (result === null) {
          return res.status(404).send("Book not found")
        }
        return res.json(result);
      })
    } else {
      res.status(401).send('Not Authorized')
    }
  },

  /**
   * 
   */
  deleteBook: (req, res) => {
    if (req.user) {
      Book.findByIdAndDelete(req.params._bookId, (error, result) => {
        if (error) {
          return res.status(400).send(error.message);
        }
        if (result === null) {
          return res.status(404).send("Book not found")
        }
        return res.status(204).send()
      })
    } else {
      res.status(401).send('Not Authorized')
    }
  }
}
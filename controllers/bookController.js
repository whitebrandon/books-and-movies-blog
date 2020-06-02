'use strict';

const Book = require('../models/book');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  /**
   * 
   */
  getBookCollection: async (req, res) => {
    Book.find({title: "B.L.A.C.K.: Bread Leavens After Continuous Kneading"}, (error, results) => {
      if (error) {
        return console.error("There was an error: ", error);
      }
      console.log('These are the results: ', results)
      return res.status(200).json(results);
    })
  },

  /**
   * 
   */
  createBook: (req, res) => {

  },

  /**
   * 
   */
  getBook: (req, res) => {

  },

  /**
   * 
   */
  updateBook: (req, res) => {

  },

  /**
   * 
   */
  deleteBook: (req, res) => {

  }
}
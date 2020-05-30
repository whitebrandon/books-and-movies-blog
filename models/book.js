'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  songs: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Song',
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model('Book', BookSchema);
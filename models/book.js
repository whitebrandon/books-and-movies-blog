'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owners: { 
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    required: 'Please include at least one owner in the owners array',
    default: undefined
  },
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
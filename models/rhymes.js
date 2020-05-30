'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RhymesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Intro', 'Hook', 'Verse', 'Coda'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model('Rhymes', RhymesSchema);
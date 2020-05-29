'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: Array,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
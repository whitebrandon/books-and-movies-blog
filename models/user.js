'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  emailAddress: {
    type: String,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
/*   rhymebooks: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Book',
  }] */
});

module.exports = mongoose.model('User', UserSchema);
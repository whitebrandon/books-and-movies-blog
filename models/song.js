const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SongSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: [String],
    required: true,
  },
  intro: {
    type: String,
  },
  verses: {
    type: [String],
  },
  hooks: {
    type: [String],
  },
  coda: {
    type: String,
  },
  tags: [],
});

module.exports = mongoose.model('Song', SongSchema);
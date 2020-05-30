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
    type: Schema.Types.ObjectId,
    ref: 'Rhymes',
  },
  verses: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Rhymes',
  }],
  hooks: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Rhymes',
  }],
  coda: { 
    type: Schema.Types.ObjectId,
    ref: 'Rhymes',
  },
  tags: [],
});

module.exports = mongoose.model('Song', SongSchema);
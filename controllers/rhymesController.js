'use strict';

const Rhyme = require('../models/rhyme');

module.exports = {
  /**
   * 
   */
  getRhymeCollection: async (req, res) => {
    const rhymeCollection = await Rhyme.find();
    if (rhymeCollection) {
      return res.json(rhymeCollection);
    }
    return res.send('Something went wrong!');
  },

  /**
   *
   */
  postRhyme: async (req, res) => {
    const newLyrics = req.body;
    const rhyme = await new Rhyme(newLyrics).save();
    if (rhyme) {
      return res.json(rhyme);
    }
    return res.send('Something went wrong');
  },

  /**
   * 
   */
  getRhyme: async (req, res) => {
    const { _id } = req.params;
    const rhyme = await Rhyme.findOne({_id});
    if (rhyme) {
      return res.json(rhyme);
    }
    return res.send('Something went wrong!');
  },

  updateRhyme: async (req, res) => {
    const { _id } = req.params;
    const updatedLyrics = req.body;
    const rhyme = await Rhyme.findOneAndUpdate(_id, updatedLyrics, { new: true });
    if (rhyme) {
      return res.json(updatedrhyme);
    }
    return res.send('Something went wrong');
  },

  /**
   * 
   */
  deleteRhyme: async (req, res) => {
    const { _id } = req.params;
    const query = await Rhyme.deleteOne({_id});
    if (query.ok === 1) {
      return res.status(204).send();
    }
    return res.send('Something went wrong');
  }
}
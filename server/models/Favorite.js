const { Schema, model } = require('mongoose');

const favoriteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  sportKey: {
    type: String,
    required: true,
  }
});

const Favorite = model('favorite', favoriteSchema);

module.exports = Favorite;
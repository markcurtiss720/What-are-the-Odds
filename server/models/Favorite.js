const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
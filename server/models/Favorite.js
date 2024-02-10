const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const favoriteSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   }
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);

// module.exports = Favorite;


const favoriteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Favorite = model('favorite', favoriteSchema);

module.exports = Favorite;
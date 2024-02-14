const { User, Favorite } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');

const resolvers = {
  Query: {
    
    users: async () => {
      return User.find().populate('favorites');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('favorites');
    },

    favorites: async (parent, { username }) => {
      return Favorite.find();
    },

    favorite: async (parent, { favoriteId }) => {
      return Favorite.findOne({ _id: favoriteId });
    },

    externalData: async () => {
      try {
        // Make HTTP request to external API
        const odds_api_key = '657096347f9cea90f9f8a5b84dc4de0e'
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/?apiKey=657096347f9cea90f9f8a5b84dc4de0e`);

        // Extract the relevant data from the response
        const data = response.data;

        // Format the data as needed
        const formattedData = data.map(item => ({
          key: item.key
          // Add more fields as needed
        }));

        return formattedData;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch external data');
      }
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addFavorite: async (parent, { name, eventName, sportKey, username }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error('User not found');
      }

      const favorite = await Favorite.create({ name, eventName, sportKey });
      user.favorites.push(favorite._id);
      await user.save();
      return favorite;
    },
    removeFavorite: async (parent, { favoriteId }) => {
      return Favorite.findOneAndDelete({ _id: favoriteId });
    },
  },
};

module.exports = resolvers;
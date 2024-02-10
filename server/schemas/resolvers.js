/* const { User, Favorite,  } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');
const { User, Thought } = require('../models');

const resolvers = {
  Query: {
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
    }
};

module.exports = resolvers; */


const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
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
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
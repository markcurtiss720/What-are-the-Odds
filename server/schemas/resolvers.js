const { User, Favorite,  } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('favorites');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('favorites');
    },
    favorites: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Favorite.find(params).sort({ createdAt: -1 });
    },
    favorites: async (parent, { favoriteId }) => {
      return Favorite.findOne({ _id: favoriteId });
    },
  },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw AuthenticationError;
      },

      addFavorite: async (parent, { name }, context) => {
        if (context.user) {
          const favorite = await Favorite.create({ name });
        }

        throw  AuthenticationError;
      },

      deleteFavorite: async (parent, { favoriteId }, context) => {
        if (context.user) {
          return await Favorite.findByIdAndDelete({ _id: favoriteId });
        }
        
        throw  AuthenticationError;
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      },
    },
};
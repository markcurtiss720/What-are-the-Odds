const { User, Favorite,  } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');

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

module.exports = resolvers;

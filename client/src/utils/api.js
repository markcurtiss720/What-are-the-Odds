import axios from 'axios';

const odds_api_key = process.env.odds_key;
const getBasketballOdds = async () => {
  try {
    const response = await axios.get(
      'https://api.the-odds-api.com/v4/sports/basketball_nba/odds',
      {
        params: {
          apiKey: odds_api_key, // Use 'apiKey' as the parameter name
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching basketball odds:', error);
    throw error;
  }
};

export default getBasketballOdds
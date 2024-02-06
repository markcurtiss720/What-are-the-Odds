import axios from 'axios';

const odds_api_key = process.env.odds_key
export const getBasketballOdds = async () => {
  try {
    const response = await axios.get(
      'https://api.the-odds-api.com/v4/sports/basketball_nba/odds',
      {
        params: {
            odds_api_key, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching basketball odds:', error);
    throw error;
  }
};
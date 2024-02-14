import axios from 'axios';

const getEventOdds = async (sport, query) => {
    try {
      const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/events/${query}/odds?apiKey=${import.meta.env.VITE_ODDS_KEY}&regions=us&markets=h2h&oddsFormat=american`)
      console.log("testing response");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('it looks like collin messed up this code, sorry', error);
      throw error;
    }
  }
  
export default getEventOdds;
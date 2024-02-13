import axios from 'axios';

const getEventOdds = async (sport, query) => {
    try {
      const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/events/${query}/odds?apiKey=aa3becac25fcd2c2ab5fbeb0900b9847&regions=us&markets=h2h&oddsFormat=american`)
      console.log("testing response");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('it looks like collin messed up this code, sorry', error);
      throw error;
    }
  }
  
export default getEventOdds;
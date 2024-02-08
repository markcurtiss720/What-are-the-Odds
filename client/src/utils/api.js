import axios from 'axios';


const apiURL = "https://api.the-odds-api.com/v4/sports/?apiKey=657096347f9cea90f9f8a5b84dc4de0e"

// axios.get(
//   apiURL
// )
// .then(
//   response => {
//     console.log(response.data)
//   }
// )
const getBasketballOdds = async () => {
  try {
    const response = await axios.get(
      apiURL
    );
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching basketball odds:', error);
    throw error;
  }
};

export default getBasketballOdds;
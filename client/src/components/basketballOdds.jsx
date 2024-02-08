// client/src/components/BasketballOdds.jsx
import React, { useEffect, useState } from 'react';
import { getBasketballOdds } from '../utils/api';

const BasketballOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const fetchBasketballOdds = async () => {
      try {
        const basketballOdds = await getBasketballOdds();
        setOdds(basketballOdds.data); // Adjust this based on the API response structure
      } catch (error) {
        // Handle error
      }
    };

    fetchBasketballOdds();
  }, []);

  return (
    <div>
      <h2>Basketball Odds</h2>
      {/* Display odds in your component */}
      {/* Adjust the rendering based on the API response structure */}
      <ul>
        {odds.map((odd) => (
          <li key={odd.id}>{/* Render odds data here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasketballOdds;

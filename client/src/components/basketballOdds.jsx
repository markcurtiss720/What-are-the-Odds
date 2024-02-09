// client/src/components/BasketballOdds.jsx
import React, { useEffect, useState } from 'react';
import ResultList from './ResultsList';

import getBasketballOdds from '../utils/api';

const BasketballOdds = () => {
  const [odds, setOdds] = useState([]);

  const searchOdds = async (query) => {
    const data = await getBasketballOdds(query);
    console.log("testing data")
    console.log(data)
    setOdds(data);
  };

useEffect(() => {
  searchOdds('basketball');
  }, []);

  return (
    <div>
      {/* Display odds in your component */}
      {/* Adjust the rendering based on the API response structure */}
      <ResultList odds={odds} />
    </div>
  );
};

export default BasketballOdds;

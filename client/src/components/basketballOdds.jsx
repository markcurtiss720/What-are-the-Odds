// client/src/components/BasketballOdds.jsx
import React, { useEffect, useState } from 'react';
import ResultList from './ResultsList';

import getBasketballOdds from '../utils/api';

const BasketballOdds = () => {
  const [odds, setOdds] = useState([]);

  const searchOdds = async (query) => {
    const data = await getBasketballOdds(query);
    setOdds(data);
    console.log(data);
    console.log(odds);
  };



useEffect(() => {
  searchOdds('basketball');


    //   try {
    //     const basketballOdds = await getBasketballOdds();
    //     setOdds(basketballOdds.data); // Adjust this based on the API response structure
    //   } catch (error) {
    //     console.log(error)
    //     // Handle error
    //   }
    // };

    // fetchBasketballOdds();
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

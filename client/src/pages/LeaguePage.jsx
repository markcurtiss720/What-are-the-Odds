import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getOdds from '../utils/api';
import { List, ListItem, Card, Typography } from "@material-tailwind/react";

export default function LeaguePage() {
    const { queryKey } = useParams();
    const [leagueData, setLeagueData] = useState([]);

    useEffect(() => {
        // Call GetOdds(query_key) when the component mounts or when query_key changes
        getOdds(queryKey)
          .then(data => {
            console.log(data);
            setLeagueData(data);
          })
          .catch(error => {
            console.error("Error fetching league data:", error);
          });
      }, [queryKey]);

    const handleEventClick = (sport, game) => {
        window.location.href = `/league/${sport}/${game}`
    }

    const parseDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Note: getMonth() returns zero-based month
      const day = date.getDate(); 
      return `${month}/${day}/${year}`
    };


    return (
        <div className="flex flex-col mt-32 justify-center items-center">
        <Typography variant="h1" className="mb-4">Events:</Typography>
        <Typography variant="h5">Click on an Event to view the odds!</Typography>
        <Card className="w-96 mt-4">
          <List>
            {leagueData.map((item, index) => (
                <ListItem
                className="flex flex-col items-start justify-around font-bold"
                key={index} 
                onClick={() => handleEventClick(item.sport_key, item.id)}
                >
                    {item.away_team} vs. {item.home_team}
                    <p className="font-normal">{parseDate(item.commence_time)}</p>
                </ListItem>
            ))}
          </List>
        </Card>
        </div>
      );
}
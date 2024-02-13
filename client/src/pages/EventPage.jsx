import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getEventOdds from "../utils/getEventOdds";
import { List, ListItem, Card, Typography, Button } from "@material-tailwind/react";

export default function EventPage() {
    const { queryKey, eventId } = useParams();
    const [leagueData, setLeagueData] = useState([]);
    const [bookmakers, setBookmakers] = useState([]);

    useEffect(() => {
        // Call GetOdds(query_key) when the component mounts or when query_key changes
        getEventOdds(queryKey, eventId)
          .then(data => {
            console.log(data);
            setLeagueData(data);
            setBookmakers(data.bookmakers)
            console.log(bookmakers);
          })
          .catch(error => {
            console.error("Error fetching league data:", error);
          });
      }, [eventId]);

    return (
        <div className="flex flex-col mt-32 justify-center items-center">
        <Typography variant="h1" className="mb-4">{leagueData.away_team} vs. {leagueData.home_team}</Typography>
        <Button>Favorite This Event</Button>
        <Card className="w-96 mt-4">
          <List>
            {bookmakers.map((item, index) => (
                <ListItem key={index}>
                    {item.title}
                    {item.markets && (
                        <List>
                            {item.markets.map((market, subIndex) => (
                                <ListItem key={subIndex}>
                                    {market.outcomes && (
                                        <div>
                                            {market.outcomes.map((outcome, subSubindex) => (
                                                <p key={subSubindex}>{outcome.name}: {outcome.price}</p>
                                            ))}
                                        </div>
                                    )}
                                    </ListItem>
                            ))}
                        </List>
                    )}
                </ListItem>
            ))}
          </List>

        </Card>
        </div>
      );
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getEventOdds from "../utils/getEventOdds";
import { List, ListItem, Card, Typography, Button } from "@material-tailwind/react";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FAVORITE } from '../utils/mutations';
import Auth from "../utils/auth";


export default function EventPage() {
    const { queryKey, eventId } = useParams();
    const [leagueData, setLeagueData] = useState([]);
    const [bookmakers, setBookmakers] = useState([]);
    const [eventName, setEventName] = useState('');
    const [sportKey, setSportKey] = useState('');

    useEffect(() => {
        getEventOdds(queryKey, eventId)
          .then(data => {
            console.log(data);
            setLeagueData(data);
            setBookmakers(data.bookmakers)
            console.log(leagueData);
            const match = `${data.away_team} vs. ${data.home_team}`
            setEventName(match);
            setSportKey(data.sport_key);
            console.log(eventName);
          })
          .catch(error => {
            console.error("Error fetching league data:", error);
          });
      }, [eventId]);
  
      // Inside your component
      const [addFavorite] = useMutation(ADD_FAVORITE);

      const [user, setUser] = useState('')

      useEffect(() => {
          const fetchUser = async () => {
              try{
                  const userProfile = Auth.getProfile();
                  setUser(userProfile.data)
                  console.log(userProfile.data)
              } catch (error) {
                  console.error('Error fetching user profile:', error);
              }
          }

          fetchUser();

      }, []);

      
      const handleAddFavorite = async (name) => {
        try {
          const username = user.username
          if (!username) {
            console.error('User not authenticated');
            return;
          }
          const { data } = await addFavorite({
            variables: { name, eventName: eventName, sportKey: sportKey, username },
          });
          console.log('Favorite added:', data.addFavorite);
          // Optionally, update local state or show a success message.
        } catch (error) {
          console.error('Error adding favorite:');
          throw error;
        }
      };

    return (
        <div className="flex flex-col mt-32 justify-center items-center">
        <Typography variant="h1" className="mb-4">{eventName}</Typography>
        <Button onClick={() => handleAddFavorite(eventId)}>Favorite This Event</Button>
        <Card className="w-96 mt-4">
          <List>
            {bookmakers.map((item, index) => (
                <ListItem className="font-bold flex justify-between" key={index}>
                    {item.title}
                    {item.markets && (
                        <List>
                            {item.markets.map((market, subIndex) => (
                                <ListItem key={subIndex}>
                                    {market.outcomes && (
                                        <div>
                                            {market.outcomes.map((outcome, subSubindex) => (
                                                <p key={subSubindex}>{outcome.name}:  {outcome.price}</p>
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
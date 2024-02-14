import React, { useState, useEffect } from 'react';
import { 
    Typography,
    Card,
    CardBody,
    CardFooter,
    Button,
    List,
    ListItem,
    ListItemSuffix,
    IconButton,
 } from "@material-tailwind/react";
 import TrashIcon from '../components/TrashIcon';
 import Auth from '../utils/auth';
 import { useMutation, useQuery } from '@apollo/client';
 import { GET_USER } from '../utils/queries';
 import { REMOVE_FAVORITE } from '../utils/mutations';


const Account = () => {

const [user, setUser] = useState('')
const [favorites, setFavorites] = useState([])

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

const { loading, error, data } = useQuery(GET_USER, {
    variables: { username: user.username },
});

useEffect(() => {
    if (!loading && !error) {
        setFavorites(data.user.favorites);
        console.log(data.user.favorites)
        console.log(favorites);
    }
}, [loading, error, data]);

const handleFavoriteClick = (sport, game) => {
    window.location.href = `/league/${sport}/${game}`
}

const [removeFavorite] = useMutation(REMOVE_FAVORITE);

const handleDeleteFavorite = async (id) => {
    try {
        const { data } = await removeFavorite({
            variables: { favoriteId: id }
        })
        console.log('Favorite removed:', data.removeFavorite)
        location.reload()
    } catch (error) {
        console.error('Error deleting favorite');
        throw error;
    }
}

    return (
        <div className='mt-32'>
            <Typography 
            variant="h1"
            className='text-center'
            >
                My Account
            </Typography>
            <div className='flex flex-col items-center justify-center'>
                <Card className="mt-6 w-96 md:w-3/4">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                        Welcome, {user.username}!
                        </Typography>
                        <Typography variant='h6' className='mt-12'>
                            My Favorites:
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <List>
                            {favorites.map((favorite, index) => (
                                <div key={index} className='flex'>
                                    <ListItem  
                                    ripple={false} 
                                    className="py-1 pr-1 pl-4"
                                    onClick={() => handleFavoriteClick(favorite.sportKey, favorite.name)}
                                    >
                                    {favorite.eventName}
                                    </ListItem>
                                    <IconButton onClick={() => handleDeleteFavorite(favorite._id)} variant="text" color="blue-gray">
                                    <TrashIcon />
                                    </IconButton>
                                </div>
                            ))}
                        </List>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Account;
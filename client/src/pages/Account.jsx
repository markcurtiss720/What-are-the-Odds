import React from 'react';
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

const Account = () => {
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
                        Welcome, John Smith!
                        </Typography>
                        <Typography variant='h6' className='mt-12'>
                            My Favorites:
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <List>
                            <ListItem ripple={false} className="py-1 pr-1 pl-4">
                            Item One
                            <ListItemSuffix>
                                <IconButton variant="text" color="blue-gray">
                                <TrashIcon />
                                </IconButton>
                            </ListItemSuffix>
                            </ListItem>
                            <ListItem ripple={false} className="py-1 pr-1 pl-4">
                            Item Two
                            <ListItemSuffix>
                                <IconButton variant="text" color="blue-gray">
                                <TrashIcon />
                                </IconButton>
                            </ListItemSuffix>
                            </ListItem>
                            <ListItem ripple={false} className="py-1 pr-1 pl-4">
                            Item Three
                            <ListItemSuffix>
                                <IconButton variant="text" color="blue-gray">
                                <TrashIcon />
                                </IconButton>
                            </ListItemSuffix>
                            </ListItem>
                        </List>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Account;
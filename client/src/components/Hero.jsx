import React from "react";
import { 
    Card,
    Typography
 } from "@material-tailwind/react";

export default function Hero() {
    return (
        <div className="mx-auto max-w-screen-md py-12 mt-28">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://www.mountainjackpot.com/wp-content/uploads/2021/02/sports-betting-1000x499-1.jpg"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2 text-center">
          What are the Odds?
        </Typography>
        <Typography color="gray" className="font-normal">
            Your one stop shop for finding <span className="font-bold">ALL </span> 
            of the odds for your favorite basketball games, all in one place! Whether
            you want to see the lines from Vegas' big sportsbooks like Ceasars or MGM,
            or an online sportsbook like Fanduel or Draftkings, you can find
            and compare odds to be most informed bettor possible with What are the Odds.
        </Typography>
      </div>
    )
}
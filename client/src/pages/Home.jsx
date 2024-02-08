import React from "react";
import Nav from "../components/Nav.jsx"
import SignIn from "../components/SignIn.jsx";
import Hero from "../components/Hero.jsx";
import Odds from "../components/basketballOdds.jsx";
const Home = () => {
    return (
        <div>
            <Hero/>
            <Odds/>
        </div>
    )
}

export default Home;
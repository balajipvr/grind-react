import React from "react";
import AuthService from '../Authservice';

const Home = () => {
    AuthService.logout();
    return <div>I am in Home</div>
}

export default Home;
import React from "react";
import uubackground from "../images/downloaded_images/uu-1.jpg";

const Home = () => {
    return (
        <div>
            <div className="container-home-main">
                <img src={uubackground} className="App-logo" alt="logo" />
                <h1>Welcome to Utkal University</h1>
                <p>Where do you want to go, today?</p>
            </div>
            <div>
                <h3>Administration Building</h3>
                <h3>Parija Library</h3>
                <h3>Incubation Center</h3>
            </div>
        </div>
    );
};

export default Home;

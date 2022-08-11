import React from 'react';
import Navbar from '../Navbar/Navbar';
//this is the login button to authenticate the user
import LoginSpotify from '../LoginSpotify/LoginSpotify';
//this is the actual player
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';

//! 2. this is grabbing from the URL AFTER authentication
//we pass this as a prop so the SpotifyPlayer can use it
const code = new URLSearchParams(window.location.search).get('code');

export default function Practices() {
    return (
        <div>
            <p className="view-title">Practices</p>
            {code ? <SpotifyPlayer code={code} /> : <LoginSpotify />}
            <Navbar />
        </div>
    );
}

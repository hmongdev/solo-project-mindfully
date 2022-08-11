import React from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//this is the login button to authenticate the user
import LoginSpotify from '../LoginSpotify/LoginSpotify';
import SpotifyPlayer from '../SpotifyPlayer/SpotifyPlayer';

//App.js file

const code = new URLSearchParams(window.location.search).get('code');
export default function Practices() {
    return (
        <div>
            <p className="view-title">Practices</p>
            {code ? (
                <SpotifyPlayer className="w-100 mx-auto p-3" code={code} />
            ) : (
                <LoginSpotify />
            )}
            <Navbar />
        </div>
    );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Profile/Profile.css';

export default function AboutPage() {
    const history = useHistory();

    return (
        <>
            <h1 className="view-title">Technologies Used</h1>
            <p>React</p>
            <p>Redux</p>
            <p>Express</p>
            <p>Node</p>
            <p>MUI</p>
            <p>Spotify API</p>
            <h1 className="view-title">Toughest Challenge</h1>
            <ul>
                <p>Spotify API</p>
            </ul>
            <h1 className="view-title">Next Step</h1>
            <ul>
                <p>Chat Function with Twilio</p>
            </ul>
            <h1 className="view-title">Thanks</h1>
            <ul>
                <p>Prime</p>
                <p>Jemisin & Liz</p>
                <p>Family & Friends</p>
            </ul>
            <button
                className="btn return-btn"
                onClick={() => history.push('/')}
            >
                Return
            </button>
        </>
    );
}

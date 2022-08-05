import React from 'react';
import Navbar from '../Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';

export default function Feeling() {
    const history = useHistory();

    const handleCancelCheckins = () => {
        history.push('/dashboard');
    };

    const handleNext = () => {
        history.push('/reflection');
    };

    return (
        <>
            <p className="view-title">How are you feeling?</p>
            <div className="main-container">
                <ul>
                    <button className="feeling">
                        😊<p>Happy</p>
                    </button>
                    <button className="feeling">
                        😁<p>Excited</p>
                    </button>
                    <button className="feeling">
                        😇<p>Grateful</p>
                    </button>
                </ul>
                <ul>
                    <button className="feeling">
                        😌<p>Relaxed</p>
                    </button>
                    <button className="feeling">
                        🙂<p>Content</p>
                    </button>
                    <button className="feeling">
                        😮‍💨<p>Tired</p>
                    </button>
                </ul>
                <ul>
                    <button className="feeling">
                        🤔<p>Unsure</p>
                    </button>
                    <button className="feeling">
                        🥱<p>Bored</p>
                    </button>
                    <button className="feeling">
                        😰<p>Anxious</p>
                    </button>
                </ul>
                <ul>
                    <button className="feeling">
                        😡<p>Angry</p>
                    </button>
                    <button className="feeling">
                        😖<p>Stressed</p>
                    </button>
                    <button className="feeling">
                        😞<p>Sad</p>
                    </button>
                </ul>
            </div>
            <div className="nav-container">
                <button onClick={handleCancelCheckins}>
                    <CancelIcon style={{ fontSize: 60 }} />
                    Cancel
                </button>
                <button onClick={handleNext}>
                    <KeyboardArrowRightIcon style={{ fontSize: 60 }} />
                    Next
                </button>
            </div>
            {/* <h1 className="center">Step 1 of 3</h1> */}
            <Navbar />
        </>
    );
}

import React from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';

export default function Reflection() {
    const history = useHistory();
    const handleBack = () => {
        history.push('/feeling');
    };

    const handleNext = () => {
        history.push('/gratitude');
    };

    return (
        <div>
            <p className="view-title">How was your day?</p>
            <div className="main-container">
                <p className="view-title">Today's Date</p>
                <textarea
                    className="reflection"
                    type="text"
                    placeholder="What happened? What did you do today?"
                ></textarea>
            </div>
            <div className="nav-container">
                <button onClick={handleBack}>
                    <KeyboardArrowLeftIcon style={{ fontSize: 60 }} />
                    Back
                </button>
                <button onClick={handleNext}>
                    <KeyboardArrowRightIcon style={{ fontSize: 60 }} />
                    Next
                </button>
            </div>
            <Navbar />
        </div>
    );
}

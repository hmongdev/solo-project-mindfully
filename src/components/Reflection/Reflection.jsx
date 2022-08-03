import React from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';

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
            <div className="button-container">
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

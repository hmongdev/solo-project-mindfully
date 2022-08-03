import React from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHistory } from 'react-router-dom';

export default function Gratitude() {
    const history = useHistory();

    const handleBack = () => {
        history.push('/reflection');
    };

    const handleSubmit = () => {
        history.push('/dashboard');
    };

    return (
        <div>
            <p className="view-title">What are you grateful for?</p>
            <div className="button-container">
                <button onClick={handleBack}>
                    <KeyboardArrowLeftIcon style={{ fontSize: 60 }} />
                    Back
                </button>
                <button onClick={handleSubmit}>
                    <CheckCircleIcon style={{ fontSize: 60 }} />
                    Submit
                </button>
            </div>
            <Navbar />
        </div>
    );
}

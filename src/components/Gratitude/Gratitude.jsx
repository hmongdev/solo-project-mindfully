import React from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';

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
            <form className="main-container">
                <input
                    className="gratitude"
                    placeholder="Someone helped me by..."
                ></input>
                <input
                    className="gratitude"
                    placeholder="I'm really glad that..."
                ></input>
                <input
                    className="gratitude"
                    placeholder="I laughed at..."
                ></input>
                <button className="submit" onClick={handleSubmit}>
                    <CheckCircleIcon style={{ fontSize: 60 }} />
                    Submit
                </button>
            </form>
            <div className="nav-container">
                <button onClick={handleBack}>
                    <KeyboardArrowLeftIcon style={{ fontSize: 60 }} />
                    Back
                </button>
            </div>
            <Navbar />
        </div>
    );
}

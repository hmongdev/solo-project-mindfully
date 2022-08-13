import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';
import { useDispatch } from 'react-redux';

export default function Reflection() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [reflection, setReflection] = useState('');

    //date
    const current = new Date();
    const date = `${
        current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`;

    const handleBack = () => {
        history.push('/feeling');
    };

    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_REFLECTION',
            payload: reflection,
        });
        history.push('/gratitude');
    };

    const handleSecretButton = () => {
        setReflection(
            `I meditated, danced in the kitchen, and spoke with my sister. She and her partner just got back from Vegas, and they had a blast! They almost got attacked by a crow lol :)`
        );
    };

    return (
        <div>
            <p className="view-title">How was your day?</p>
            <div className="main-container">
                <p className="view-title">{date}</p>
                <form onSubmit={handleNext}>
                    <textarea
                        className="reflection"
                        type="text"
                        placeholder="What happened? What did you do today?"
                        onChange={(event) => setReflection(event.target.value)}
                        value={reflection}
                    />
                </form>
            </div>
            <div className="nav-container">
                <button onClick={handleBack}>
                    <KeyboardArrowLeftIcon
                        style={{ fontSize: 60, color: 'yellow' }}
                    />
                    Back
                </button>
                <button
                    className="secret-button"
                    onClick={handleSecretButton}
                ></button>
                <button onClick={handleNext}>
                    <KeyboardArrowRightIcon
                        style={{ fontSize: 60, color: 'limegreen' }}
                    />
                    Next
                </button>
            </div>
            <Navbar />
        </div>
    );
}

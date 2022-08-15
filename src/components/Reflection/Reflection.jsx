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
            `I was worried about picking up groceries and felt a slight pressure on my chest. I was able to observe my thoughts, sensations, and let it go by the end of the practice.`
        );
    };

    return (
        <div>
            <p className="view-title">Observations</p>
            <div className="main-container">
                <p className="view-title">{date}</p>
                <form onSubmit={handleNext}>
                    <textarea
                        className="reflection"
                        type="text"
                        placeholder="Where did you notice in your body? What were your thoughts?"
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

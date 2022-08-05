import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';
import { useDispatch } from 'react-redux';

export default function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const handleCancel = () => {
        dispatch({
            type: 'CLEAR_ALL',
        });
        history.push('/dashboard');
    };

    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELING',
            payload: feeling,
        });
        history.push('/reflection');
    };

    const handleFeeling = (event) => {
        setFeeling(event.target.value);
    };

    return (
        <>
            <p className="view-title">How are you feeling?</p>
            <div className="main-container">
                <ul>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😊"
                    >
                        😊<p>Happy</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😁"
                    >
                        😁<p>Excited</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😇"
                    >
                        😇<p>Grateful</p>
                    </button>
                </ul>
                <ul>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😌"
                    >
                        😌<p>Relaxed</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="🙂"
                    >
                        🙂<p>Content</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😮‍💨"
                    >
                        😮‍💨<p>Tired</p>
                    </button>
                </ul>
                <ul>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="🤔"
                    >
                        🤔<p>Unsure</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="🥱"
                    >
                        🥱<p>Bored</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😰"
                    >
                        😰<p>Anxious</p>
                    </button>
                </ul>
                <ul>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😡"
                    >
                        😡<p>Angry</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😖"
                    >
                        😖<p>Stressed</p>
                    </button>
                    <button
                        className="feeling"
                        onClick={handleFeeling}
                        value="😞"
                    >
                        😞<p>Sad</p>
                    </button>
                </ul>
            </div>
            <div className="nav-container">
                <button onClick={handleCancel}>
                    <CancelIcon style={{ fontSize: 60, color: 'darkred' }} />
                    Cancel
                </button>
                <button onClick={handleNext}>
                    <KeyboardArrowRightIcon
                        style={{ fontSize: 60, color: 'limegreen' }}
                    />
                    Next
                </button>
            </div>
            <Navbar />
        </>
    );
}

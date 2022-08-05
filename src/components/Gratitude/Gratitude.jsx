import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHistory } from 'react-router-dom';
import '../Feeling/Feeling.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Gratitude() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [gratitude1, setGratitude1] = useState('');
    const [gratitude2, setGratitude2] = useState('');
    const [gratitude3, setGratitude3] = useState('');
    const feeling = useSelector((store) => store.feeling);
    const reflection = useSelector((store) => store.reflection);

    const handleBack = () => {
        history.push('/reflection');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_GRATITUDE',
            payload: {
                gratitude1,
                gratitude2,
                gratitude3,
            },
        });

        dispatch({
            type: 'POST_FORM',
            payload: {
                feeling: feeling,
                reflection: reflection,
                gratitude1: gratitude1,
                gratitude2: gratitude2,
                gratitude3: gratitude3,
            },
        });
        history.push('/dashboard');
    };

    return (
        <div>
            <p className="view-title">What are you grateful for?</p>
            <form className="main-container">
                <input
                    className="gratitude"
                    value={gratitude1}
                    placeholder="Someone helped me by..."
                    onChange={(event) => setGratitude1(event.target.value)}
                ></input>
                <input
                    className="gratitude"
                    value={gratitude2}
                    placeholder="I'm really glad that..."
                    onChange={(event) => setGratitude2(event.target.value)}
                ></input>
                <input
                    className="gratitude"
                    value={gratitude3}
                    placeholder="I laughed at..."
                    onChange={(event) => setGratitude3(event.target.value)}
                ></input>
            </form>
            <div className="nav-container">
                <button onClick={handleBack}>
                    <KeyboardArrowLeftIcon
                        style={{ fontSize: 60, color: 'yellow' }}
                    />
                    Back
                </button>
                <button onClick={handleSubmit}>
                    <CheckCircleIcon
                        style={{ fontSize: 60, color: 'limegreen' }}
                    />
                    Submit
                </button>
            </div>
            <Navbar />
        </div>
    );
}

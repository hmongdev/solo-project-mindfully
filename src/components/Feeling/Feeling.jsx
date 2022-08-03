import React from 'react';
import Navbar from '../Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';

import './Feeling.css';

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
            <center>
                <p className="view-title">How are you feeling?</p>
            </center>
            <div className="button-container">
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

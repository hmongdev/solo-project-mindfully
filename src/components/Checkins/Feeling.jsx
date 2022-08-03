import React from 'react';
import Navbar from '../Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';

import './Checkins.css';

export default function Feeling() {
    const history = useHistory();

    const handleCancelCheckins = () => {
        history.push('/dashboard');
    };

    return (
        <div>
            <p className="view-title">How are you feeling?</p>
            <div className="button-container">
                <button onClick={handleCancelCheckins}>
                    <CancelIcon style={{ fontSize: 60 }} />
                    Cancel
                </button>
                <button>
                    <KeyboardArrowRightIcon style={{ fontSize: 60 }} />
                    Next
                </button>
            </div>
            <Navbar />
        </div>
    );
}

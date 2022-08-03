import React from 'react';
import Navbar from '../Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Checkins.css';

export default function Feeling() {
    return (
        <div>
            <p className="view-title">How are you feeling</p>
            <div className="button-container">
                <button>
                    <CancelIcon style={{ fontSize: 60 }} />
                </button>
                <button>
                    <KeyboardArrowRightIcon style={{ fontSize: 60 }} />
                </button>
            </div>
            <Navbar />
        </div>
    );
}

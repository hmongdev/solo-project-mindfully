import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../Navbar/Navbar.css';

//mui
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    const history = useHistory();

    return (
        <div className="navbar">
            <button
                className="clicked"
                onClick={() => {
                    history.push('/dashboard');
                }}
            >
                <HomeIcon className="clicked" sx={{ fontSize: 60 }} />
                Dashboard
            </button>
            <button
                className="clicked"
                onClick={() => {
                    history.push('/practices');
                }}
            >
                <PsychologyIcon sx={{ fontSize: 60 }} />
                Practices
            </button>
            <button
                className="clicked"
                onClick={() => {
                    history.push('/profile');
                }}
            >
                <AccountCircleIcon sx={{ fontSize: 60 }} />
                Profile
            </button>
            <button
                className="clicked"
                onClick={() => {
                    history.push('/feeling');
                }}
            >
                <FormatListBulletedIcon sx={{ fontSize: 60 }} />
                Checkins
            </button>
        </div>
    );
}

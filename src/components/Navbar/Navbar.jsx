import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useState } from 'react';

//mui
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    const history = useHistory();
    const [clicked, setClicked] = useState(true);

    return (
        <div className="navbar">
            <button
                onClick={() => {
                    setClicked(!clicked);
                    history.push('/dashboard');
                }}
            >
                {/* <HomeIcon style={{ fontSize: 60, color: 'red' }} /> */}
                <HomeIcon
                    style={{
                        fontSize: 60,
                        '&:focus': { color: 'purple' },
                        color: clicked ? 'red' : 'green',
                    }}
                />
                Dashboard
            </button>
            <button
                onClick={() => {
                    history.push('/practices');
                }}
            >
                <PsychologyIcon style={{ fontSize: 60 }} />
                Practices
            </button>
            <button
                onClick={() => {
                    history.push('/profile');
                }}
            >
                <AccountCircleIcon style={{ fontSize: 60 }} />
                Profile
            </button>
            <button
                onClick={() => {
                    history.push('/feeling');
                }}
            >
                <FormatListBulletedIcon style={{ fontSize: 60 }} />
                Checkins
            </button>
        </div>
    );
}

import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../Navbar/Navbar.css';

//mui
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    const history = useHistory();

    return (
        <div className="navbar">
            <button
                className="practice"
                onClick={() => {
                    history.push('/practices');
                }}
            >
                <PsychologyIcon style={{ fontSize: 60 }} />
            </button>
            <button
                className="profile"
                onClick={() => {
                    history.push('/profile');
                }}
            >
                <AccountCircleIcon style={{ fontSize: 60 }} />
            </button>
            <button
                className="checkins"
                onClick={() => {
                    history.push('/checkins');
                }}
            >
                <FormatListBulletedIcon style={{ fontSize: 60 }} />
            </button>
        </div>
    );
}

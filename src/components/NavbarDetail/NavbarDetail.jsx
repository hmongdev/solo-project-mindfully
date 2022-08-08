import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './NavbarDetail.css';

//mui
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

export default function NavbarDetail() {
    const history = useHistory();

    const handleDeleteDetail = () => {
        console.log(`is this deleting?`);
        // history.push('/dashboard');
    };

    return (
        <div className="navbar-detail-container">
            <button
                className="navbar-detail"
                onClick={() => {
                    history.push('/dashboard');
                }}
            >
                <ReplyRoundedIcon
                    style={{ fontSize: 60, color: 'limegreen' }}
                />
                Return
            </button>
            <button className="navbar-detail" onClick={handleDeleteDetail}>
                <DeleteForeverIcon style={{ fontSize: 60, color: 'maroon' }} />
                Delete
            </button>
        </div>
    );
}

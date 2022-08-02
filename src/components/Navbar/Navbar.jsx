import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const history = useHistory();

    return (
        <div className="navbar">
            <button
                onClick={() => {
                    history.push('/login');
                }}
            >
                Practice
            </button>
        </div>
    );
}

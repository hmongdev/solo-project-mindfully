import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Profile() {
    return (
        <>
            <button
                className="btn"
                onClick={() => dispatch({ type: 'LOGOUT' })}
            >
                Log Out
            </button>
            <Navbar />
        </>
    );
}

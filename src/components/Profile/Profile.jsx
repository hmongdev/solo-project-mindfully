import React from 'react';

export default function Profile() {
    return (
        <>
            <button
                className="btn"
                onClick={() => dispatch({ type: 'LOGOUT' })}
            >
                Log Out
            </button>
        </>
    );
}

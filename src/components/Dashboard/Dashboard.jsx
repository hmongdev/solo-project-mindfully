import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
    // this component doesn't do much to start, just renders some user reducer info to the DOM
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1 className="view-title center">Dashboard</h1>
            {/* Put this logout button on profile screen */}
            {/* <LogOutButton className="btn center" /> */}
            <div className="center">
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'LOGOUT' })}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default Dashboard;

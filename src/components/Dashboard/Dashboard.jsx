import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';

function Dashboard() {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1 className="view-title center">Dashboard</h1>
            {/* Put this logout button on profile screen */}
            {/* <LogOutButton className="btn center" /> */}
            <div className="quote-container center">Quotes</div>
            <div className="center"></div>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default Dashboard;

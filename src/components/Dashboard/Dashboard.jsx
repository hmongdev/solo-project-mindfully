import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import '../Navbar/Navbar.css';
import Navbar from '../Navbar/Navbar';
import CheckinsList from '../CheckinsList/CheckinsList';
import Quotes from '../Quotes/Quotes';

function Dashboard() {
    const dispatch = useDispatch();
    return (
        <div>
            <p className="view-title center">Dashboard</p>
            <Quotes />
            <CheckinsList />
            <Navbar />
        </div>
    );
}

// this allows us to use <App /> in index.js
export default Dashboard;

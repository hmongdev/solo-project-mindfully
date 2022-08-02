import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import '../Navbar/Navbar.css';
import Navbar from '../Navbar/Navbar';

function Dashboard() {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="view-title center">Dashboard</div>
            {/* Put this logout button on profile screen */}
            {/* <LogOutButton className="btn center" /> */}
            <div className="quotes center">
                <blockquote>
                    <q>
                        Words can be like X-rays, if you use them
                        properly—they’ll go through anything. You read and
                        you’re pierced.
                    </q>
                </blockquote>
                <figcaption>Author</figcaption>
                <div>Date</div>
            </div>
            <div className="view-title center">Check-Ins</div>
            <div className="checkins">CheckIn List</div>
            <Navbar />
        </div>
    );
}

// this allows us to use <App /> in index.js
export default Dashboard;

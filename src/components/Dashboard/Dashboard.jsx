import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import '../Navbar/Navbar.css';
import Navbar from '../Navbar/Navbar';
import CheckinsList from '../CheckinsList/CheckinsList';

export default function Dashboard() {
    return (
        <div>
            {/* <CheckinsList /> */}
            <table>
                <tr></tr>
            </table>
            <Navbar />
        </div>
    );
}

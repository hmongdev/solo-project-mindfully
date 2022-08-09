import React from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login';

export default function Practices() {
    return (
        <div>
            <p className="view-title">Practices</p>
            <Login />
            <Navbar />
        </div>
    );
}

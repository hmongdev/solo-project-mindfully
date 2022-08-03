import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Profile.css';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <>
            <p className="view-title">Profile</p>

            <div className="settings-container">
                <ul>
                    <h1 className="greeting">Hello, {user.name}</h1>
                    <li>
                        <button>
                            <span>Edit Name</span>
                        </button>
                    </li>
                    <hr></hr>
                    <li>
                        <button onClick={() => dispatch({ type: 'LOGOUT' })}>
                            <span>Log Out</span>
                        </button>
                    </li>
                    <hr></hr>
                    <li>
                        <button>
                            <span>Delete Account</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Navbar />
        </>
    );
}

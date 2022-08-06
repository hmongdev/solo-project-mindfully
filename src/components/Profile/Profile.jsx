import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Profile.css';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteAccount = () => {
        // alert('Are you sure you want to delete your account?');
        //This is where I left off on feature/deleteAccount
        dispatch({
            type: 'DELETE_ACCOUNT',
        });
    };

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
    };

    const handleEditName = () => {
        dispatch({ type: 'SET_EDIT_NAME' });
        history.push('/profile/edit');
    };

    return (
        <>
            <p className="view-title">Profile</p>

            <div className="settings-container">
                <ul>
                    <h1 className="greeting">Hello, {user.name}</h1>
                    <li>
                        <button onClick={handleEditName}>
                            <span>Edit Name</span>
                        </button>
                    </li>
                    <hr></hr>
                    <li>
                        <button onClick={handleLogOut}>
                            <span>Log Out</span>
                        </button>
                    </li>
                    <hr></hr>
                    <li>
                        <button
                            className="btn-delete"
                            onClick={handleDeleteAccount}
                        >
                            <span>Delete Account</span>
                        </button>
                    </li>
                </ul>
            </div>
            <Navbar />
        </>
    );
}

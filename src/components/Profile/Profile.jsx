import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Profile.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import { SettingsSystemDaydreamRounded } from '@mui/icons-material';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const editName = useSelector((store) => store.editName);

    //useEffect
    useEffect(() => {
        dispatch({ type: 'FETCH_HISTORY' });
    }, []);

    //local state
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');

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

    // function handleChange(event, property) {
    //     dispatch({
    //         type: 'EDIT_ONCHANGE',
    //         payload: { property: property, value: event.target.value },
    //     });
    // }

    function handleSubmitName(event) {
        event.preventDefault();

        console.log(`what is user id`, user.id);
        console.log(`what is editName`, name);
        dispatch({
            type: 'UPDATE_NAME',
            payload: {
                id: user.id,
                name: name,
            },
        });
        setEdit(false);
    }

    return (
        <>
            <p className="view-title">Profile</p>

            <div className="settings-container">
                <ul>
                    <h1 className="greeting">
                        Hello, {}
                        {edit ? (
                            <>
                                <form
                                    className="editName-form"
                                    onSubmit={handleSubmitName}
                                >
                                    <input
                                        className="edit-input"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder={user.name}
                                        value={name}
                                    />
                                    <button
                                        className="edit-submit"
                                        onClick={handleSubmitName}
                                        type="submit"
                                    >
                                        <CheckCircleIcon
                                            style={{
                                                fontSize: 50,
                                                color: 'limegreen',
                                            }}
                                        />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>{user.name}</>
                        )}
                    </h1>
                    <li>
                        <button onClick={() => setEdit(true)}>
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

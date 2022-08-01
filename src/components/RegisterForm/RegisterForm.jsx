import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const registerUser = (event) => {
        event.preventDefault();
        dispatch({
            type: 'REGISTER',
            payload: {
                name,
                username,
                password,
            },
        });
    }; // end registerUser

    return (
        <form className="formPanel" onSubmit={registerUser}>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="signup"
                />
            </div>
        </form>
    );
}

export default RegisterForm;

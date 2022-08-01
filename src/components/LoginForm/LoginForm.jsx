import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login

    return (
        <form className="formPanel" onSubmit={login}>
            {errors.loginMessage && (
                <h3 className="alert" role="alert">
                    {errors.loginMessage}
                </h3>
            )}
            <div>
                <input
                    type="text"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <input
                    className="btn"
                    type="submit"
                    name="submit"
                    value="login"
                />
            </div>
        </form>
    );
}

export default LoginForm;

import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const history = useHistory();

    return (
        <div>
            <center>
                <LoginForm />
            </center>
            <center>
                Need an account?
                <span
                    className="btn btn_asLink"
                    onClick={() => {
                        history.push('/registration');
                    }}
                >
                    Signup
                </span>
            </center>
        </div>
    );
}

export default LoginPage;

import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';

function LoginPage() {
    const history = useHistory();

    return (
        <div>
            <center>
                <LoginForm />
            </center>
            <center>
                Need an account?
                <button
                    className="btn_asLink"
                    onClick={() => {
                        history.push('/registration');
                    }}
                >
                    Signup
                </button>
            </center>
            <Footer />
        </div>
    );
}

export default LoginPage;

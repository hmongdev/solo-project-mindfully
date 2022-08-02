import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function RegisterPage() {
    const history = useHistory();

    return (
        <div>
            <Header />
            <center>
                <RegisterForm />
            </center>
            <center>
                Have an account?
                <button
                    className="btn_asLink"
                    onClick={() => {
                        history.push('/login');
                    }}
                >
                    <u>Log In</u>
                </button>
            </center>
            <Footer />
        </div>
    );
}

export default RegisterPage;

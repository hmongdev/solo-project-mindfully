import React from 'react';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

export default function Footer() {
    const history = useHistory();

    return (
        <center>
            Read our <u>Terms</u> and <u>Privacy Policy</u>
            <br />
            <button
                className="btn_asLink"
                onClick={() => {
                    history.push('/about');
                }}
            >
                <u>About Page</u>
            </button>
        </center>
    );
}

import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function LoginSpotify() {
    const AUTH_URL =
        'https://accounts.spotify.com/authorize?client_id=4b42633281ef4a1ebc3b7359ebb42b4e&response_type=code&redirect_uri=http://localhost:3000/practices&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Spotify Login
            </a>
        </Container>
    );
}

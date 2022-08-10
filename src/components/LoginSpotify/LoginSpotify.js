import React from 'react';
import { Container } from 'react-bootstrap';

export default function LoginSpotify() {
    const AUTH_URL =
        'https://accounts.spotify.com/authorize?client_id=218e4b111a3c45bb9c394966af04924c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

    // const CLIENT_ID = '218e4b111a3c45bb9c394966af04924c';
    // const REDIRECT_URI = 'http://localhost:3000';
    // const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    // const RESPONSE_TYPE = 'token';

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <a
                className="btn btn-success btn-lg"
                // href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
                href={AUTH_URL}
            >
                Spotify Login
            </a>
        </Container>
    );
}

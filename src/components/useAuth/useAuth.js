import { useState, useEffect } from 'react';
import axios from 'axios';

//! 3. this useAuth component handles all the authorization for us
export default function useAuth(code) {
    //store all the tokens needed for authorization
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    //this is posting to the spotify route that logins
    useEffect(() => {
        axios
            .post('http://localhost:3000/login', {
                code,
            })
            .then((res) => {
                console.log(
                    `this is the data we get back from SpotifyAuth`,
                    res.data
                );
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                //this removes the code inside our URL
                window.history.pushState({}, null, '/');
            })
            .catch(() => {
                //if any auth errors are encountered, redirect the user to homepage
                window.location = '/';
            });
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
            axios
                .post('http://localhost:3000/refresh', {
                    refreshToken,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                })
                .catch(() => {
                    window.location = '/';
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
}

require('dotenv').config();
import express from 'express';
const express = require('express');
//this package solves the cors errors
const cors = require('cors');
const lyricsFinder = require('lyrics-finder');
const SpotifyWebApi = require('spotify-web-api-node');

// Body parser middleware
// bodyParser solves the issue of not being able to read property of 'code' which is json encoded
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//---------------SPOTIFY WEB API START-----------------//
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    });

    spotifyApi
        .refreshAccessToken()
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
});

//! 1. part of the auth request to allow SpotifyAPI
app.post('/login', (req, res) => {
    // code is a json object
    const code = req.body.code;
    //req with what we're sending to the API
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });
    spotifyApi
        //this is a promise => receive access and resfresh token when successful
        .authorizationCodeGrant(code)
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in, //expires in 1 hour or 3600 seconds
            });
        })
        .catch((err) => {
            res.sendStatus(400);
        });
});

app.get('/lyrics', async (req, res) => {
    const lyrics =
        (await lyricsFinder(req.query.artist, req.query.track)) ||
        'Take a moment to find \n comfort in your body. \n Notice what you are \n thinking, feeling, and sensing. \n Where does it sit in your body?';
    res.json({ lyrics });
});

//---------------SPOTIFY WEB API END-----------------//

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const historyRouter = require('./routes/history.router');
const detailRouter = require('./routes/detail.router');

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/history', historyRouter);
app.use('/api/detail', detailRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

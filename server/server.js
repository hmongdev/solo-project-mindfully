const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
//-----------------------SPOTIFY SDK SETUP-----------------------------//
const dotenv = require('dotenv');
dotenv.config();

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
//-----------------------SPOTIFY SDK SETUP-----------------------------//

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const historyRouter = require('./routes/history.router');
const detailRouter = require('./routes/detail.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/history', historyRouter);
app.use('/api/detail', detailRouter);

//-----------------------SPOTIFY SDK SETUP-----------------------------//
// Spotify get requests
app.get('/auth/login', (req, res) => {});
app.get('/auth/callback', (req, res) => {});
//-----------------------SPOTIFY SDK SETUP-----------------------------//

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

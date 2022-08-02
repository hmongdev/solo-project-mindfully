import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Checkins from '../Checkins/Feeling';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Practices from '../Practices/Practices';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';

function App() {
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Switch>
                    {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
                    <Redirect exact from="/" to="/login" />
                    {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the Dashboard if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                    <ProtectedRoute
                        // logged in shows Dashboard else shows LoginPage
                        exact
                        path="/dashboard"
                    >
                        <Dashboard />
                    </ProtectedRoute>
                    <ProtectedRoute
                        // logged in shows Practices else shows LoginPage
                        exact
                        path="/practices"
                    >
                        <Practices />
                    </ProtectedRoute>
                    //profile
                    <ProtectedRoute exact path="/profile">
                        <Profile />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/checkins/feeling">
                        <Checkins />
                    </ProtectedRoute>
                    <Route exact path="/login">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect to the /user page
                            <Redirect to="/dashboard" />
                        ) : (
                            // Otherwise, show the login page
                            <LoginPage />
                        )}
                    </Route>
                    <Route exact path="/registration">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/dashboard" />
                        ) : (
                            // Otherwise, show the registration page
                            <RegisterPage />
                        )}
                    </Route>
                    <Route exact path="/home">
                        {user.id ? (
                            // If the user is already logged in,
                            // redirect them to the /user page
                            <Redirect to="/dashboard" />
                        ) : (
                            // Otherwise, show the Landing page
                            <LoginPage />
                        )}
                    </Route>
                    {/* If none of the other routes matched, we will show a 404. */}
                    <Route>
                        <h1>404 ERROR</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

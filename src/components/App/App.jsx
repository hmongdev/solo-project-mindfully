import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Feeling from '../Feeling/Feeling';
import Reflection from '../Reflection/Reflection';
import Gratitude from '../Gratitude/Gratitude';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Practices from '../Practices/Practices';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HistoryDetail from '../HistoryDetail/HistoryDetail';

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

                    {/* ------------------------------PROTECTED Routes---------------------------------- */}
                    {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the Dashboard if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                    <ProtectedRoute exact path="/dashboard">
                        <Dashboard />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/practices">
                        <Practices />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/profile">
                        <Profile />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/feeling">
                        <Feeling />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/reflection">
                        <Reflection />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/gratitude">
                        <Gratitude />
                    </ProtectedRoute>
                    <ProtectedRoute
                        exact
                        path="/detail/:id"
                        component={HistoryDetail}
                    />
                    <ProtectedRoute
                        exact
                        path="/profile/edit"
                        component={Profile}
                    />
                    {/* ------------------------------Routes---------------------------------- */}
                    <Route exact path="/login">
                        {user.id ? <Redirect to="/dashboard" /> : <LoginPage />}
                    </Route>
                    {/* If the user is NOT logged in and selects signup, it will redirect to signup */}
                    <Route exact path="/signup">
                        {user.id ? (
                            <Redirect to="/dashboard" />
                        ) : (
                            <RegisterPage />
                        )}
                    </Route>
                    {/* If user is NOT logged in and they try to access ANY page, redirect to <LoginPage/> */}
                    <Route path="/">
                        {user.id ? <Redirect to="/login" /> : <LoginPage />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

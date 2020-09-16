import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CalendarPage from './CalendarPage'
import MeetingsPage from './MeetingsPage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import TeamsPage from './TeamsPage'


function App() {
    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <Switch>
                    <Route exact path="/calendar" component={CalendarPage} />
                    <Route path="/meetings" component={MeetingsPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/teams" component={TeamsPage} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
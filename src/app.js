import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Users} from './modules/users/components/users';

const Home = () => 'Home';

function App() {
    return (
        <Router>
            <div style={{display: 'flex'}}>
                <div><Link to="/">Home</Link></div>
                <div style={{marginLeft: 20}}><Link to="/users">Users</Link></div>
            </div>
            <hr/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

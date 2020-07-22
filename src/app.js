import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ReactQueryConfigProvider} from 'react-query';
import {Users} from './modules/users/components/users';

const Home = () => 'Home';

const queryConfig = {
    retry: 0,
    cacheTime: 0,
    refetchOnWindowFocus: false
};

function App() {
    return (
        <ReactQueryConfigProvider config={queryConfig}>
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
        </ReactQueryConfigProvider>
    );
}

export default App;

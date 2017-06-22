import React from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';

import Login from './components/login.js'
import Logout from './components/logout.js'
import Home from './components/home.js'
import App from './App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="home" component={Home} />
        <Route path="logout" component={Logout} />
    </Route>
);
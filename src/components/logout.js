import React, { Component, PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import auth from '../utilities/authentication';

class Logout extends Component {

    componentDidMount() {
        auth.deleteToken();
        browserHistory.push('/');
    }

    render() {
        return (
            <h1 className="loading-text">
                Logging out...
            </h1>
        );
    }
}

export default Logout;
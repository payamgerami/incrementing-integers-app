import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class LogoutInfo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-sm-offset-5 col-sm-1">
                    <Link className="btn btn-primary" to="/logout">
                        Logout
                    </Link>
                </div>
            </div>
        );
    }
};
export default LogoutInfo;
import React from 'react';
import ReactDOM from 'react-dom';
import auth from '../utilities/authentication';

const LoginInfo = (props) => {
    return (
        <div className="container-fluid">
            <div className="col-sm-1">
                <img src={auth.getPicture()} />
            </div>
            <div className="col-sm-6 fbName">
                {auth.getName()}
            </div>
        </div>
    );
};
export default LoginInfo;
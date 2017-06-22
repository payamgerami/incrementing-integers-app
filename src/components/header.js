import React from 'react';
import ReactDOM from 'react-dom';
import LoginInfo from './loginInfo'
import LogoutInfo from './logoutInfo'
import auth from '../utilities/authentication';

const Header = (props) => {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <LoginInfo />
                </div>
                <div className="col-sm-4">
                    <h4>Incrementing Integers</h4>
                </div>
                <div className="col-sm-4">
                    <div className={auth.hasToken() ? 'fbLogout' : 'hidden'}>
                        <LogoutInfo style="display:none" />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;